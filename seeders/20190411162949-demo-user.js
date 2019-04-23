'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Hoang Thuc Van',
      email:'hthuc1998@gmail.com',
      address: 'TanBinh District , HCM city ',
      phone: '0917205321',
      imagepath:'dhhdhhd',
      password: '12345',
      isAdmin: true,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
