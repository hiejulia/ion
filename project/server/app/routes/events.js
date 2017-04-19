'use strict';

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');
const auth = require('../middlewares/authentication');

router.param('eventId', eventController.findById);

router.post('/events', auth.ensured, eventController.create);
router.get('/events', auth.ensured, eventController.getAll);
router.get('/events/:eventId', auth.ensured, eventController.getOne);
router.put('/events/:eventId', auth.ensured, eventController.update);
router.delete('/events/:eventId', auth.ensured, eventController.remove);

module.exports = router;