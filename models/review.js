'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User);
  };
  return Review;
};