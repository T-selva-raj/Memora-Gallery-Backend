module.exports = (sequelize, DataTypes) => {
    let Model = sequelize.define('Images', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageId: {
            type: DataTypes.STRING,
            allowNull:false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        albumId: {
            type: DataTypes.INTEGER
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'Images',
        schema: 'user',
        timestamps: true,
        paranoid: true
    });
    // Model.associate = function (models) {
    //     this.belongsTo(models.userDetails, { foreignKey: 'userID' });
    //     this.belongsTo(models.albums, { foreignKey: 'albumId' })
    // }
    return Model;
}