var TechEvents = require('../models/techevents');
 
exports.getTechEvents = function(req, res, next){
 
    TechEvents.find(function(err, techevents) {
 
        if (err){
            res.send(err);
        }
 
        res.json(techevents);
 
    });
 
}
 
exports.createTechEvents = function(req, res, next){
 
    TechEvents.create({
        title : req.body.title
    }, function(err, techevents) {
 
        if (err){
            res.send(err);
        }
 
        TechEvents.find(function(err, techevents) {
 
            if (err){
                res.send(err);
            }
 
            res.json(techevents);
 
        });
 
    });
 
}
 
exports.deleteTechEvents = function(req, res, next){
 
    TechEvents.remove({
        _id : req.params.techevents_id
    }, function(err, techevent) {
        res.json(techevent);
    });
 
}