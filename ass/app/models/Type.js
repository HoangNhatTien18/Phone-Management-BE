const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Type = new Schema({
    type: {type: String, require: true},
    image:  {type: String, require: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('type', Type);