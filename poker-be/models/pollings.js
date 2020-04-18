"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pollings = sequelize.define(
    "Pollings",
    {
      userName: DataTypes.STRING,
      poll: DataTypes.STRING,
    },
    {}
  );
  Pollings.associate = function (models) {
    // associations can be defined here
    Pollings.belongsTo(models.Session, {
      foreignKey: "sessionId",
      onDelete: "CASCADE",
    });
  };
  return Pollings;
};
