let express = require('express');
let router = express.Router();
let {User} = require('../model');
router.get('/signup',function(req,res){
    res.render('user/signup',{title:'signup'});
});
router.post('/signup',function(req,res){
    let user = req.body;
    console.log('req.body : ');
    console.log(req.body);
    User.create(user,function(err,doc){
        console.log('user:');
        console.log(user);
        if(err){
            res.redirect('back');
        }else{res.redirect('/user/signin');}
    });
});
router.get('/signin',function(req,res){
    res.render('user/signin',{title:'signin'});
});
router.post('/signin',function(req,res){
    let user = req.body;
    user.findOne(user,function(err,doc){
        if(err){
            res.redirect('back');
        }else if(doc){
            res.redirect('/');
        }else{res.redirect('back');}
    });
});
router.get('/signout',function(req,res){
    res.send('signout page');
});
module .exports = router;