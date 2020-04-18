"use strict";
/**
 * Session Type Modals
 */
module.exports = (sequelize, DataTypes) => {
  const SessionType = sequelize.define(
    "SessionType",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  SessionType.associate = function (models) {
    // associations can be defined here
    SessionType.hasMany(models.Session, {
      foreignKey: "sessionTypeId",
      onDelete: "CASCADE",
    });
  };
  return SessionType;
};
