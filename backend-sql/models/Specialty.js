"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Specialty.init(
    {
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "specialty",
    }
  );
  return Specialty;
};
