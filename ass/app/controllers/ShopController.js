const Shop = require('../models/Shop');
const Type = require('../models/type');

class ShopController{
    // [GET] /shop/create
    create(req,res,next){
       res.render('shop/create')
    }

    //[GET] /shop/:id/edit
    edit(req,res,next){
        
        Shop.findById(req.params.id).lean()
            .then(shop => res.render('shop/edit', {shop}))
            .catch(next)
    }

     //[PUT] /shop/:id
    update(req,res,next){
        Shop.updateOne({_id :req.params.id}, req.body.password) 
            .then(() => res.redirect('stored-shop'))
            .catch(next);
    }

     //[DELETE] /shop/:id
     delete(req,res,next){
        Shop.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }
    
    // [POST] /shop/store
    store(req,res,next){
        const formdata = req.body;
        formdata.image = req.file.originalname;
        const shop = new Shop(req.body);
        
        shop.save()
            .then(() => res.redirect('/shop/'+req.body.type+'/detailType'))
            .catch(next)
    }

    storeType(req, res, next){
        req.body.image = req.file.originalname;
        const type = new Type(req.body);
        type.save()
            .then(() => res.redirect('/'))
            .catch(next)

    }
    
    //[GET] /shop/stored-shop
    storedShop(req,res,next){
        Shop.find({}).lean()
            .then(shops => res.render('shop/stored-shop', {shops}))
            .catch(next)
    }

    //[GET] /shop/:slug/detail
    detail(req,res,next){
        Shop.findOne({slug: req.params.slug}).lean()
            .then(shop => res.render('shop/detail', {shop}))
            .catch(next)    
       
    }
    detailType(req, res, next){
        Shop.find({type: req.params.type}).lean()
            .then(shop => res.render('shop/detailType', {shop}))
            .catch(next)
            
    }
    createType(req, res, next){
        res.render('shop/createType');
    }

}
module.exports = new ShopController();