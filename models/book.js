'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    quantity: DataTypes.INTEGER,
    totalAmount: DataTypes.DECIMAL
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.User);
    Book.hasMany(models.Ticket);
  };
  return Book;
};