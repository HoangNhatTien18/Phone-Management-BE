const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Shop = new Schema({
    
    name: { type: String, required: true },
    type: { type: String, required: true},
    price: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, slug: 'name'},
    imageUrl: { type: String, required: true},
    
},{
    timestamps: true
});

module.exports = mongoose.model('Shops', Shop);