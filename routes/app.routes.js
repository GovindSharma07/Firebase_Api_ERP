const firebaseApi = require("../controller/firebase.controller");
 
const express = require("express")
const routes = express.Router();


routes.post("/send-normal-notification", firebaseApi.sendNormalPushNotification);
routes.post("/sendToTopic",firebaseApi.SendLocationToTopic);
routes.post('/sendLocationToMultiUser',firebaseApi.sendLocationToMultiUser);

routes.post("/createNewUser",firebaseApi.createNewUser);
module.exports = routes;
