module.exports = function(sequelize, DataTypes) {
    var metaCritic = sequelize.define("quiz", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      platform: DataTypes.STRING,
      releaseDate: DataTypes.DATE
    });
    
    return metaCritic;
  };
  