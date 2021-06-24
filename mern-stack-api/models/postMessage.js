const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    ime : {type:String},
    message : {type:String},
},'postMessages')

module.exports = { PostMessage}