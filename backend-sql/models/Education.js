"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    static associate(models) {
      Education.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Education.init(
    {
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "education",
    }
  );
  return Education;
};
