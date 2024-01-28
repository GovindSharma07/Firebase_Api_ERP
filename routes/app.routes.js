const PushNotification = require("../controller/normal-push-notification.controller");
 
const express = require("express")
const routes = express.Router();


routes.post("/send-normal-notification", PushNotification.sendNormalPushNotification);
routes.post("/sendToTopic",PushNotification.SendLocationToTopic);
routes.post('/sendLocationToMultiUser',PushNotification.sendLocationToMultiUser);

module.exports = routes;
