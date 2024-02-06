const PushNotification = require("../controller/firebase.controller");
 
const express = require("express")
const routes = express.Router();


routes.post("/send-normal-notification", PushNotification.sendNormalPushNotification);
routes.post("/sendToTopic",PushNotification.SendLocationToTopic);
routes.post('/sendLocationToMultiUser',PushNotification.sendLocationToMultiUser);

routes.post("/createNewUser",firebaseApi.createNewUser);
module.exports = routes;
