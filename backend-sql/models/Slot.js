"use strict";
// const { BOOLEAN } = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slot extends Model {
    static associate(models) {
      Slot.belongsTo(models.Schedule, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Slot.init(
    {
      slot: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "slot",
    }
  );
  return Slot;
};
