"use strict";
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      title: DataTypes.STRING,
      creatorName: DataTypes.STRING,
    },
    {}
  );
  Session.associate = function (models) {
    // associations can be defined here
    Session.hasMany(models.Pollings, {
      foreignKey: "sessionId",
      onDelete: "CASCADE",
    });
    Session.belongsTo(models.SessionType, {
      foreignKey: "sessionTypeId",
      onDelete: "CASCADE",
    });
  };
  return Session;
};
