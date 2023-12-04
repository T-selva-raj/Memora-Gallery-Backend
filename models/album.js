module.exports = (sequelize,DataTypes) => {
    let Model = sequelize.define('albums', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        albumName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: 'albums',
            timestamps: true,
            paranoid: true
        });
    Model.associate = function(models){
        this.hasMany(models.Images, { foreignKey: 'albumId' });
        this.belongsTo(models.userDetails, { foreignKey: 'userID' });

    }
    return Model;
}