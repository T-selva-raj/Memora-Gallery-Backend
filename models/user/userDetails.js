const bcrypt = require('bcrypt');
const cryptoService = require('../../service/crypto');
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
            type: DataTypes.JSON
        },
        profilePicture: {
            type: DataTypes.STRING
        },
        driveFolder: {
            type: DataTypes.JSON
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        }
    }, {
        tableName: 'userDetails',
        schema:'user',
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
                email: this.email,
                driveFolder: this.driveFolder
            }, CONFIG.Jwt_encryption, { expiresIn: CONFIG.Jwt_expiry });
            let encryptedToken = cryptoService.encrypt(token);
            return encryptedToken;
        } catch (e) {
            throw new Error(e.message);
        }
    }
    // Model.associate = function (models) {
    //     this.hasMany(models.Images, { foreignKey: 'userID' });
    //     this.hasMany(models.albums, { foreignKey: 'albumId' });
    // }
    return Model;
}