var express =require('express');
var router=express.Router();
var userController=require('../controllers/users');
router.post('/',function(req,res){

});
router.put('/:id',function(req,res){

});
router.delete('/:id',function(req,res){
    var id=req.params.id;
    userController.delete(id,function(){
        res.sendStatus(204);
        res.end();
    })
    
});
module.exports=router;