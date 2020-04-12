const express = require('express');
 const EmailController = require ('./controllers/EmailController');
// const IncidentController = require ('./controllers/IncidentController');
// const SessionController = require ('./controllers/SessionController');
// const ProfileController = require ('./controllers/ProfileController');
const routes = express.Router();


// routes.post('/sessions', SessionController.create);

 routes.post('/sendEmail', EmailController.sendMail );
// routes.post('/ongs', OngController.create);

// routes.get('/incident', IncidentController.get );
// routes.post('/incident', IncidentController.create);
// routes.delete('/incident/:id', IncidentController.delete);


// routes.get('/profile', ProfileController.index);

module.exports = routes;