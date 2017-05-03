'use strict';

module.exports = {
	app: {
		title: 'Meetup',
		description: 'Meetup app',
		keywords: 'MongoDB, Express, AngularJS, Node.js,Ionic '
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
