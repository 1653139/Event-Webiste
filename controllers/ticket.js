var controller={};
var models=require('../models');
var Tickets=models.Ticket;
controller.getAllTicket=function(callback){
    Tickets
    .findAll()
    .then(function(tickets){
        callback(tickets);
    })
};

module.exports=controller;
