const Shop = require('../models/Shop');
const Type = require('../models/type');
const { mutilpleMongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
class SiteController{
    home(req,res,next){
        // res.render('home');
        Type.find({}).lean()
            .then(types => {
                res.render('home', {
                    types
                })
            })
            .catch(next)
      
    }

    api(req,res,next){
        // res.render('home');
        Type.find({})
            .then(types => {
                res.json(types)
            })
            .catch(next)
      
    }
    
    detailTypeAPI(req, res, next){
        Shop.find({type: req.params.type}).lean()
            .then(shop => {
                res.json(shop)
            })
            .catch(next)
            
    }

    detail(req,res,next){
        Shop.findOne({slug: req.params.slug})
            .then(shop => {
                res.json(shop)
            })
            .catch(next)    
     
    }
   
}
module.exports = new SiteController();