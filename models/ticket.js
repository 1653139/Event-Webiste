'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Book);
  };
  return Ticket;
};