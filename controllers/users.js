var controller={};
var models=require('../models');
var Users=models.User;
controller.getAll=function(callback){
    Users
    .findAll()
    .then(function(users){
        callback(users);
    })
};
controller.getById = function(id, callback){
    Users
    .findOne({ 
        where: {id: id},
    })
    .then(function(user){
        callback(user);
    });
};
controller.add=function(user,callback){
    Users
    .create(user)
    .then(callback);

};
// controller.update=function(id,user,callback){
//     Users
//     .update({
//         user:user.user
//     },{
//         where:{id:user.id}
//     })
//     .then(callback);

// };
// controller.delete=function(id,callback){
//     Users
//     .destroy({
//         where: {id=user.id}
        
//     })
//     then(callback);
// };
 module.exports=controller;
