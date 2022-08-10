const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z ,.'-]+$/i,
          len: [2, 23],
        },
        set(value) {
          this.setDataValue("userName", value.toLowerCase());
        },
        // always return the value with the first letter capitalize
        get() {
          return (
            this.getDataValue("userName").charAt(0).toUpperCase() +
            this.getDataValue("userName").slice(1)
          );
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z ,.'-]+$/i,
          len: [2, 23],
        },
        set(value) {
          this.setDataValue("firstName", value.toLowerCase());
        },
        // always return the value with the first letter capitalize
        get() {
          return (
            this.getDataValue("firstName").charAt(0).toUpperCase() +
            this.getDataValue("firstName").slice(1)
          );
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z ,.'-]+$/i,
          len: [2, 23],
        },
        set(value) {
          this.setDataValue("lastName", value.toLowerCase());
        },
        // always return the value with the first letter capitalize
        get() {
          return (
            this.getDataValue("lastName").charAt(0).toUpperCase() +
            this.getDataValue("lastName").slice(1)
          );
        },
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 15],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateBirth:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      profilePicture:{
        type:DataTypes.STRING,
        allowNull: false, 
      },
      userActive:{
        type:DataTypes.STRING,
        allowNull: false,   
      },
    },
  );
};
