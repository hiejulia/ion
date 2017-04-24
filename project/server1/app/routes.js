'use strict';
var AuthenticationController = require('./controllers/authentication'),
    EventController = require('./controllers/events'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');
var requireAuth = passport.authenticate('jwt', { session: false }),
    requireLogin = passport.authenticate('local', { session: false });


var Review = require('./models/review');
var User = require('./models/user');


module.exports = function (app) {

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        eventRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);//user => json 

    authRoutes.get('/protected', requireAuth, function (req, res) {
        res.send({ content: 'Success',user:req.user });
    });

    // Todo Routes
    apiRoutes.use('/events', eventRoutes);

    eventRoutes.get('/', EventController.getEvents);
    eventRoutes.post('/', EventController.createEvent);
    eventRoutes.delete('/:event_id', EventController.deleteEvent);

    // Set up routes
    app.use('/api', apiRoutes);



    app.get('/api/reviews', function (req, res) {

        console.log("fetching reviews");

        // use mongoose to get all reviews in the database
        //use limit and skip and sort here
        Review.find(function (err, reviews) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(reviews); // return all reviews in JSON format
        });
    });

    // create review and send back all reviews after creation
    app.post('/api/reviews', function (req, res) {

       
        Review.create({
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
            content: req.body.content,
            location: req.body.location,
            organization: req.body.organization,
            isActive: req.body.isActive,
            numberOfParticipants: req.body.numberOfParticipants,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            createdBy:req.user
        }, function (err, review) {
            if (err) {
                res.send(err);

            }
                

            // get and return all the reviews after you create another
            Review.find(function (err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });

    });

    // delete a review
    app.delete('/api/reviews/:review_id', function (req, res) {
        Review.remove({
            _id: req.params.review_id
        }, function (err, review) {
            if (err) {
                res.send(err);
            }

            //else
            res.json(review);

        });
    });



    app.get('/api/reviews/:review_id', function (req, res) {


        Review.findById({
            _id: req.params.review_id
        }, function (err, review) {
            if (err) {
                res.send(err);
            }

            res.json(review);

        });
    });



    //get user by id
    app.get('/api/users/:user_id', function (req, res) {


        User.findById({
            _id: req.params.user_id
        }, function (err, user) {
            if (err) {
                res.send(err);
            }

            res.json(user);

        });
    });


    //put 
    app.patch('/api/reviews/:review_id', function (req, res) {




        Review.findById(req.params.review_id, function (err, review) {
            // Handle any possible database errors
            if (err) {
                res.status(500).send(err);
            } else {
                // Update each attribute with any possible attribute that may have been submitted in the body of the request
                // If that attribute isn't in the request body, default back to whatever it was before.
                review.numberOfParticipants = req.body.numberOfParticipants + 1 || review.numberOfParticipants + 1;


                // Save the updated document back to the database
                review.save(function (err, review) {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.json(review);
                });
            }
        });
    });



        //get list of current users
        app.get('/api/users', function (req, res) {

            
            // // use mongoose to get all reviews in the database
            // User.find(function (err, users) {

            //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            //     if (err){
            //         res.send(err)
            //     }
                    

            //     res.json(users); // return all reviews in JSON format
            // });


            User.find().sort({createdAt:"descending"}).exec(function(err,users){
                if(err) {
                    res.send(err);
                }
                res.json(users); 

            })

        
        });


    


    


}


/**
 * This is the routes to add the new review from each user
 * router.post('/:id/addresses', function(req, res, next){
    var addressPromise = models.addresses.create(req.body);
    var userPromise = addressPromise.then(function(address) {
      return models.users.findById(req.params.id)
    });
    Promise.all([addressPromise, userPromise], function([address, user]) {
      user.addresses.push(address._id);
      return user.save();
    }).then(function(user) {
      return res.json(user);
    }).catch(next);
});
 * 
 * 
 */




//====================

/**
 * This is the route to list all the events of a user that the user participate/ or created
 * app.get('',function(req,res) => {
 * users.find({}).populate('review').then...
 * })
 * .populate('addresses')
 */



//=====================
/**
 * This is route to create new event for each users
 * models.address.save/create...
 * return users.findById()....
 * user.push(address)
 */



// app.get('/groups/:name', function(request, response) { 
//     console.log ('groups'); 
//     response.setHeader('content-type', 
//     'application/json');     
//     response.end(JSON.stringify      
//     (contacts.get_members(request.params.name))); 
// });  



//========================
/**
 * List of participants the user has participated/created
 * user = new User()
 * event = new Event()
 * user.eventsParticipated.push(event);
 * user.save(cb);
 * 
 * === execute
 * User.findById({}).populate('eventsParticipated).exec(function(err,event){
 * if(err)...
 * res.send(event);
 * })
 */



//===========================
/**
 * add new comment to each event
 * Models.Image.findOne({ filename: { $regex: req.params.image_id } },
function(err, image) {
if (!err && image) {
var newComment = new Models.Comment(req.body);
newComment.gravatar = md5(newComment.email);
newComment.image_id = image._id;
newComment.save(function(err, comment) {
if (err) { throw err; }

res.redirect('/images/' + image.uniqueId + '#' + comment._id);
            });
        } else {
res.redirect('/');
        }
    });
 */



//========================================================REMOVE
/**
 * exports.remove = function (model, _primarycontactnumber, response) {
console.log('Deleting contact with primary number: ' 
+ _primarycontactnumber);   
model.findOne({primarycontactnumber: _primarycontactnumber}, function(error, data) {
    if (error) {
        console.log(error);
        if (response != null) {
            response.writeHead(500, {'Content-Type' : 
            'text/plain'});           
            response.end('Internal server error');
        }
        return;
    } else {    
        if (!data) {
            console.log('not found');               
            if (response != null)
            {
                response.writeHead(404, {'Content-Type' : 
                'text/plain'});           
                response.end('Not Found');
            }
            return;
        } else {    
            data.remove(function(error){
                if (!error) {
                    data.remove();                      
                                        
                }
                else {
                    console.log(error);
                }
            });             
            
            if (response != null){
                response.send('Deleted');   
            }               
            return;
        }
    }       
}); 
}
 */


//==================================UPDATE
/**
 * exports.update = function (model, requestBody, response) {
var primarynumber = requestBody.primarycontactnumber;
  model.findOne({primarycontactnumber: primarynumber}, 
    function(error, data) {
  if (error) {
    console.log(error);
    if (response != null) {
      response.writeHead(500, 
        {'Content-Type' : 'text/plain'});
      response.end('Internal server error');
        }
      return;
    } else {
      var contact = toContact(requestBody, model);
      if (!data) {
        console.log('Contact with primary number: '+ 
        primarynumber + ' does not exist. The contact will 
        be created.');
        contact.save(function(error) {
          if (!error)
          contact.save();
        });

        if (response != null) {
          response.writeHead(201, 
            {'Content-Type' : 'text/plain'});
          response.end('Created');
        }
        return;
      }
      //poulate the document with the updated values

        data.firstname = contact.firstname;
        data.lastname = contact.lastname;
        data.title = contact.title;
        data.company = contact.company;
        data.jobtitle = contact.jobtitle;
        data.primarycontactnumber = 
        contact.primarycontactnumber;
        data.othercontactnumbers = 
        contact.othercontactnumbers;
        data.emailaddresses = contact.emailaddresses;
        data.primaryemailaddress = 
        contact.primaryemailaddress;
        data.groups = contact.groups;
        // now save
        data.save(function (error) {
        if (!error) {
          console.log('Successfully updated contact with 
          primary number: '+ primarynumber);
          data.save();
        } else {
          console.log('error on save');
        }
      });
        if (response != null) {
          response.send('Updated');
        }
      }
    });
  };
 */

//===============================================CREATE
/**
 * exports.create = function (model, requestBody, response) {
  var contact = toContact(requestBody, model);
  var primarynumber = requestBody.primarycontactnumber;
  contact.save(function(error) {
    if (!error) {
      contact.save();
    } else {
      console.log('Checking if contact saving failed due 
      to already existing primary number:' + 
      primarynumber);
      model.findOne({primarycontactnumber: primarynumber}, 
      function(error, data) {
        if (error) {
          console.log(error);
          if (response != null) {
            response.writeHead(500,
              {'Content-Type' : 'text/plain'});    
            response.end('Internal server error');
          }
          return;
          } else {
            var contact = toContact(requestBody, model);
            if (!data) {
              console.log('The contact does not exist. It 
              will be created');
              contact.save(function(error) {
                if (!error) {
                  contact.save();
                  } else {
                    console.log(error);
                  }
                });

                if (response != null) {
                  response.writeHead(201, 
                    {'Content-Type' : 'text/plain'});
                  response.end('Created');
              }
              return;
            } else {    
              console.log('Updating contact with primary 
              contact number:' + primarynumber);
              data.firstname = contact.firstname;
              data.lastname = contact.lastname;
              data.title = contact.title;
              data.company = contact.company;
              data.jobtitle = contact.jobtitle;
              data.primarycontactnumber = 
              contact.primarycontactnumber;
              data.othercontactnumbers = 
              contact.othercontactnumbers;
              data.emailaddresses = contact.emailaddresses;
              data.primaryemailaddress = 
              contact.primaryemailaddress;
              data.groups = contact.groups;

              data.save(function (error) {
                if (!error) {
                  data.save();
                  response.end('Updated');
                  console.log('Successfully Updated 
                  contact with primary contact number: ' + 
                  primarynumber);
                } else {
                  console.log('Error while saving contact 
                  with primary contact number:' + 
                  primarynumber);
                  console.log(error);
                }
              });
            }
          }
        });
      }
    });
};

function toContact(body, Contact) {
  return new Contact(
  {
    firstname: body.firstname,
    lastname: body.lastname,
    title: body.title,
    company: body.company,
    jobtitle: body.jobtitle,
    primarycontactnumber: body.primarycontactnumber,
    primaryemailaddress: body.primaryemailaddress,
      emailaddresses: body.emailaddresses,
      groups: body.groups,
      othercontactnumbers: body.othercontactnumbers
    });
  } 

 */



//============================FIND BY NUMBER
/**
 * exports.findByNumber = function (model, _primarycontactnumber, response) {
  model.findOne({primarycontactnumber:_primarycontactnumber}, 
function(error, result) {
    if (error) {
      console.error(error);
      response.writeHead(500,
        {'Content-Type' : 'text/plain'});
      response.end('Internal server error');
      return;
    } else {
      if (!result) {
        if (response != null) {
        response.writeHead(404, {'Content-Type' : 
        'text/plain'});
        response.end('Not Found');
      }
      return;
    }
    if (response != null){
      response.setHeader('Content-Type', 
      'application/json');
        response.send(result);
      }
      console.log(result);
    }
  });
}
 */

/**
 * routes 
 * var contactSchema = new mongoose.Schema({
  primarycontactnumber: {type: String, index: {unique: 
  true}},
  firstname: String,
  lastname: String,
  title: String,
  company: String,
  jobtitle: String,
  othercontactnumbers: [String],
  primaryemailaddress: String,
  emailaddresses: [String],
  groups: [String]
});
var Contact = mongoose.model('Contact', contactSchema);

app.get('/contacts/:number', function(request, response) {
  console.log(request.url + ' : querying for ' + 
  request.params.number);
  dataservice.findByNumber(Contact, request.params.number, 
  response);
});

app.post('/contacts', function(request, response) {
  dataservice.update(Contact, request.body, response)
});

app.put('/contacts', function(request, response) {
  dataservice.create(Contact, request.body, response)
});

app.del('/contacts/:primarycontactnumber', function(request, response) {
dataservice.remove(Contact, 
  request.params.primarycontactnumber, response));
});

app.get('/contacts', function(request, response) {
  console.log('Listing all contacts with ' + 
  request.params.key + '=' + request.params.value);
  dataservice.list(Contact, response);
});

 */