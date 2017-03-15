var mongoose = require('mongoose');
 
var TechEventsSchema = new mongoose.Schema({
 
    title: {
        type: String,
        required: true
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('TechEvents', TechEventsSchema);