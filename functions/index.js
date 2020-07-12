const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdmin = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może nadać privilage admina'}

    return admin.auth().getUserByEmail(data.email)
      .then(user => {
          return admin.auth().setCustomUserClaims(user.uid, {admin: true})
      })
      .then(() => ({message: `Nadano status admina użytkownikowi ${data.email}`}))
      .catch(err => err)
})

exports.updateUser = functions.https.onCall((data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
          'unauthenticated', 
          'you are not authenticated'
        );
      }
    const user = admin.firestore().collection('users').doc(context.auth.uid)
    return user.update({username: data.username})
})

exports.deleteOrg = functions.https.onCall(async (data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może usuwać organizacje'}

    const orgRef = admin.firestore().collection(data.collection).doc(data.id);
    orgRef.delete()
        .then(() => ({message: 'Usunięto organizację'}))
        .catch(err => err)
})

exports.updateOrg = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może edytować organizacje'}

    const orgRef = admin.firestore().collection(data.collection).doc(data.id);
    orgRef.set({
        name: data.values.name,
        goal: data.values.goal,
        items: data.itemsArr
    })
        .then(() => ({message: 'Edytowano organizację'}))
        .catch(err => err)
})

exports.addOrg = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może dodawa organizacje'}
    const collectionRef = admin.firestore().collection(data.collection);
    collectionRef.add({
        name: data.values.name,
        goal: data.values.goal, 
        items: data.itemsArr
    })
})

exports.listAllUsers = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może wyświetlać użytkowników'}
    admin.auth().listUsers()
        .then(userResults => {
            userResults.users.forEach(user => {
                console.log('user', user.toJSON());
            });
            // if (userResults.pageToken) {
            //     listAllUsers(userResults.pageToken);
            // }
        })
        .catch(err => console.log('error listing users', err))
})