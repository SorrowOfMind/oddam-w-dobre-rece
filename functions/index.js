const functions = require('firebase-functions');
const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) {
        return {error: 'Tylko admin może nadać privilage admina'}
    }
    return admin.auth().getUserByEmail(data.email)
      .then(user => {
          return admin.auth().setCustomUserClaims(user.uid, {admin: true})
      })
      .then(() => {
          return {message: `Nadano status admina użytkownikowi ${data.email}`}
      })
      .catch(err => err)
})

exports.updateUser = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
          'unauthenticated', 
          'you are not authenticated'
        );
      }
    const user = admin.firestore().collection('users').doc(context.auth.uid)
    return user.update({
        username: data.username
    })
})