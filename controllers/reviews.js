
controller={};
var models=require('../models');
var Reviews=models.Review;
controller.add=function(content,callback){
    Reviews
    .create(content)
    .then(callback);

};
controller.update=function(content,callback){
    Reviews
    .update({
        content:content.content
    },{
        where:{id:content.id}
    })
    .then(callback);

};
controller.delete=function(id, callback){
    Reviews
    .destroy({
        where: {id: id}
    })
    .then(callback);
};
controller.getAllReview=function(callback){
    Reviews
    .findAll({  
        include:[models.User]
    })
    .then(function(reviews){
        callback(reviews);
    })
};
module.exports=controller;
