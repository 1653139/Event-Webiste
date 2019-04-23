var express =require('express');
var router=express.Router();
var reviewController=require('../controllers/reviews');
router.post('/',function(req,res){
    var contentof = {
        content: req.body.content,
        UserId: req.body.UserId
    }

    reviewController.add(contentof,function(){
        res.sendStatus(204);
        res.end();
    })
});
router.put('/:id',function(req,res){
    
    var contentof={
        id: req.params.id,
        content:req.body.content
    }
    reviewController.update(contentof,function(){
        res.sendStatus(204);
        res.end();
    })
});
router.delete('/:id',function(req,res){
    var id=req.params.id;
    reviewController.delete(id,function(){
        res.sendStatus(204);
        res.end();
    })
    
});
module.exports=router;