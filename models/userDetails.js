const bcrypt = require('bcrypt');
const cryptoService = require('../service/crypto');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
    let Model = sequelize.define('userDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        socialLinks: {
            type: DataTypes.JSON
        },
        bio: {
            type: DataTypes.STRING
        },
        profilePicture: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'userDetails',
        timestamps: true,
        paranoid: true
    });
    Model.beforeSave(async (user, options) => {
        if (user.changed('password')) {
            let hash, salt;
            const rounds = crypto.randomInt(0, 5);
            try {
                salt = await bcrypt.genSalt(rounds);
                hash = await bcrypt.hash(user.password, salt);
                user.password = hash;
            } catch (e) {
                throw new Error(e.message);
            }
        }
    });
    Model.prototype.getJWT = async function () {
        try {
            let token = 'Bearer ' + jwt.sign({
                id: this.id,
                userName: this.userName,
                email: this.email
            }, CONFIG.Jwt_encryption, { expiresIn: CONFIG.Jwt_expiry });
            let encryptedToken = cryptoService.encrypt(token);
            return encryptedToken;
        } catch (e) {
            throw new Error(e.message);
        }
    }
    return Model;
}