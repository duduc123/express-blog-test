let express = require('express');
let router = express.Router();
router.get('/',function(req,res){
    res.render('index',{title:'Ê×Ò³'});
});
module.exports = router;