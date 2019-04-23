var express=require('express');
var router =express.Router();

var controller=require('../controllers/users');

router.get('/',(req, res)=>{
    
    res.render('loginAd',{layout: false});
});
router.get('/dashboard',(req, res)=>{

	res.render('dashboard', {layout: 'layoutAd'});
});
router.get('/login',(req, res)=>{
    
    res.render('loginAd',{layout: false});
});
router.get('/register',(req, res)=>{
    
    res.render('registerAd',{layout: false});
});
router.get('/chart',(req, res)=>{
	
	res.render('chart', {layout: 'layoutAd'});
});
router.get('/table',(req, res)=>{
	controller.getAll(function(users){
	
		res.locals.users = users;
		res.render('table', {layout:'layoutAd'});
	});

	
});
router.get('/profile',(req, res)=>{
	controller.getById(1,function(profile){
	
		res.locals.profile = profile;
		res.render('profile', {layout: 'layoutAd'});
	});

	
});
module.exports=router;
