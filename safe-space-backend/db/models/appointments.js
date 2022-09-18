"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.client);
      this.belongsTo(models.therapist);
    }
  }
  Appointments.init(
    {
      // id: DataTypes.INTEGER,
      startDatetime: DataTypes.DATE,
      endDatetime: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      currentTherapist: DataTypes.BOOLEAN,
      therapistsId: {
        type: DataTypes.INTEGER,
        references: {
          model: "therapist",
          key: "id",
        },
      },
      clientsId: {
        type: DataTypes.INTEGER,
        references: {
          model: "client",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "appointments",
      underscored: true,
    }
  );
  return Appointments;
};