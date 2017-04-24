var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');




var	Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    firstname: {
		type: String,
		trim: true,
		default: ''
		
	},
	lastname: {
		type: String,
		trim: true,
		default: ''
	},
    bio: {
        type:String,
        default:''
    },
	displayName:{
        type:String
    },
 
    email: {
        type: String,
        lowercase: true,
        unique: true,
        default:'',
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: [{
			type: String,
			enum: ['user', 'admin']
		}],
		default: ['user']
    },
 createdAt: {
		type: Date,
		default: Date.now
	},
    eventCreated: {
		type: Schema.ObjectId,
		ref: 'Review'
	},
    eventParticipate:{
        type: Schema.ObjectId,
		ref: 'Review'
    }
});
 


UserSchema.virtual('fullName')
    .get(function(){
        return this.firstname + " " + this.lastname;
    })
    .set(function(fullname){
        var parts = fullname.split(' ');
        this.firstname = parts[0];
        this.lastname = part[1];

    })


UserSchema.pre('save', function(next){
 
    var user = this;
    var SALT_FACTOR = 5;
 
    if(!user.isModified('password')){
        return next();
    } 
 
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
 
        if(err){
            return next(err);
        }
 
        bcrypt.hash(user.password, salt, null, function(err, hash){
 
            if(err){
                return next(err);
            }
 
            user.password = hash;
            next();
 
        });
 
    });
 
});


UserSchema.methods.giveMeDisplayName = function(){
    return this.displayName ||( this.firstname +' '+this.lastname );
}
 
UserSchema.methods.comparePassword = function(passwordAttempt, cb){
 
    bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
 
        if(err){
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    });
 
}
 
module.exports = mongoose.model('User', UserSchema);