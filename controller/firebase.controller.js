require("dotenv").config();

const { response } = require("express");
const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.serviceAccount);

admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount)
    }
);


exports.sendNormalPushNotification = async (req, res, next) => {
    try {
        const message = {
            notification: {
                title: req.body.title,
                body: req.body.body
            },
            token: req.body.token
        }
        await admin.messaging().send(message).then(() => {
            return res.send("Sent")
        }

        ).catch((err) => {
            return res.send(err)
        })
    }
    catch (err) {
        return res.send(err)
    }
}


exports.SendLocationToTopic = async (req, res, next) => {
    try {
        const message = {
            data: {
                lat: req.body.lat,
                lng: req.body.lng
            },
            topic: req.body.topic
        }

        await admin.messaging().send(message)
            .then((response) => {
                return res.sent("Sent")
            })
            .catch((err) => {
                return res.send(err)
            })
    }
    catch (err) {
        return res.send(err)
    }
}

exports.sendLocationToMultiUser = async (req, res, next) => {
    try {
        const message = {
            data: {
                lat: req.body.lat,
                lng: req.body.lng
            },
            tokens: req.body.tokens
        };

        await admin.messaging().sendEachForMulticast(message).then((response) => {
            return res.send("Sent");
        }).catch((err) => {
            return res.send(err)
        })
    } catch (error) {
        return res.send(error);
    }
}


exports.createNewUser = async (req,res,next)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        await admin.auth().createUser({
            email : email,
            password : password
        }).then((cred)=>{
            return res.send(cred.uid);
        })
    }
    catch(err){
        return res.send(err);
    }
}