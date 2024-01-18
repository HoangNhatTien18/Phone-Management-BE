const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true},
    password:  { type: String, required: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('User', User);
