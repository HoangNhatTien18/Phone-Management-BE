const Shop = require('../models/Shop');
const Type = require('../models/type');
const { mutilpleMongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
class SiteController{
    home(req,res,next){
       
        Type.find({}).lean()
            .then(types => {
                res.render('home', {
                    types
                })
            })
            .catch(next)
      
    }

    api(req,res,next){
       
        Shop.find({})
            .then(shops => {
                res.json(shops)
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