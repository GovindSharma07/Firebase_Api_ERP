require("dotenv").config();

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


exports.SendLocationToTopic = (req, res, next) => {
    try {
        const message = {
            data: {
                lat: req.body.lat,
                lng: req.body.lng
            },
            topic: req.body.topic
        }

        admin.messaging().send(message)
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