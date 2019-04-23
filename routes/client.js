var express=require('express');
var router=express.Router();
var controllerTicket=require('../controllers/ticket');
var controllerReview=require('../controllers/reviews');
router.get('/',(req, res)=>{
	controllerTicket.getAllTicket(function(tickets){
		res.locals.tickets = tickets;
		res.render('index');
	});
	
});
router.get('/signin',(req, res)=>{
	res.render('signin');
});  
router.get('/artist',(req, res)=>{
	res.render('artist');
});
router.get('/review',(req, res)=>{
	controllerReview.getAllReview(function(userReview){
		res.locals.userReview = userReview;
		res.render('review', {layout:'layout'});
	});
});
router.get('/ticket',(req, res)=>{
	controllerTicket.getAllTicket(function(tickets){
		res.locals.tickets = tickets;
		res.render('ticket', {layout:'layout'});
	});
});
router.get('/contact',(req, res)=>{
	res.render('contact');
});
router.get('/gallery',(req, res)=>{
	res.render('gallery');
});
router.get('/register',(req, res)=>{
	res.render('register');
});
router.get('/about',(req, res)=>{
	res.render('about');
});

module.exports=router;
