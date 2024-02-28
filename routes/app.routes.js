const firebaseApi = require("../controller/firebase.controller");

const express = require("express")
const routes = express.Router();


routes.post("/send-normal-notification", firebaseApi.sendNormalPushNotification);
routes.post("/sendToTopic", firebaseApi.SendLocationToTopic);
routes.post('/sendLocationToMultiUser', firebaseApi.sendLocationToMultiUser);

routes.post("/user/createUser", firebaseApi.createUser);
routes.post("/user/addDriverDetails", firebaseApi.addDriverDetails);
routes.post("/user/addTeacherDetails",firebaseApi.addTeacherDetails);
module.exports = routes;
