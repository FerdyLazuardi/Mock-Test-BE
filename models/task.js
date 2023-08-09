"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      task.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  task.init(
    {
      tittle: DataTypes.STRING,
      status: DataTypes.STRING,
      deadline: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "task",
    }
  );
  return task;
};
