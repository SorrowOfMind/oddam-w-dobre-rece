const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

admin.auth().getUserByEmail('sortoflifecraze@gmail.com')
    .then(user =>{
        return admin.auth().setCustomUserClaims(user.uid, {
            admin:true
        })
    })
    .catch(err => console.log(err));

exports.addAdmin = functions.https.onCall(data => {
    return admin.auth().getUser(data.uid).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(() => {
        return {msg: 'Success'}
    }).catch(err => err);
})


