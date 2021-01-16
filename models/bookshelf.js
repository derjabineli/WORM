
module.exports = (sequelize, DataTypes) => {
    const Bookshelf = sequelize.define('Bookshelf', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        datePublished : {
            type: DataTypes.DATE,
            allowNull: false
        },
        pages:  {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    Bookshelf.associate = (models) => {
        Bookshelf.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }})
    }

    return Bookshelf
}