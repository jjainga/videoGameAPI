module.exports = function(sequelize, DataTypes) {
    var openCritic = sequelize.define("quiz", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      platform: DataTypes.STRING,
      releaseDate: DataTypes.DATE
    });
    
    return openCritic;
  };
  