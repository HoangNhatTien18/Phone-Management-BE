const User = require('../models/User');

class AcountController{
    // [GET] /acount/login
    login(req,res){
        res.render('login');
    }
    // [GET] /acount/register
    register(req,res){
        res.render('register');
    }

    addUser(req,res,next){
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('login'))
            .catch(next);
        
    }
    checkLogin(req,res,next){
 
        User.findOne({ email: req.body.email})
            .then(user =>{
                if(user){
                    res.redirect('/')
                }else{
                    
                }
            })
            .catch(next);
        
    }
    
}
module.exports = new AcountController();