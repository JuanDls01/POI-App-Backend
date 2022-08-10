const sequelize = require("sequelize");
const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[.a-zA-Z0-9,¡!¿? ]*$/i,
          notEmpty: true,
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i,
        },
      },
      score: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
          max: 5,
        },
        allowNull: false,
      },
      // location: {
      //   type: DataTypes.GEOMETRY("POINT"),
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
