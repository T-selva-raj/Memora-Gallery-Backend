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
    return Model;
}