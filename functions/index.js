const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
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
});

exports.updateUsername = functions.https.onCall((data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
          'unauthenticated', 
          'you are not authenticated'
        );
      }
    const user = admin.firestore().collection('users').doc(context.auth.uid)
    return user.update({username: data.username})
});

exports.deleteOrg = functions.https.onCall(async (data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może usuwać organizacje'}

    const orgRef = admin.firestore().collection(data.collection).doc(data.id);
    orgRef.delete()
        .then(() => ({message: 'Usunięto organizację'}))
        .catch(err => err)
});

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
});

exports.addOrg = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może dodawać organizacje'}
    const collectionRef = admin.firestore().collection(data.collection);
    collectionRef.add({
        name: data.values.name,
        goal: data.values.goal, 
        items: data.itemsArr
    })
});

exports.listAllUsers = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może wyświetlać użytkowników'}
    let allUsers =[];
    return admin.auth().listUsers()
        .then(listUserResult => {
            listUserResult.users.forEach(userRecord => {
                const userData = userRecord.toJSON();
                allUsers.push(userData);
            });
        })
        .then(() => allUsers)
        .catch(err => console.log('error listing users', err))
});

exports.deleteUser = functions.https.onCall((data, context) => {
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może usuwać użytkowników'}
    return admin.auth().deleteUser(data.uid)
        .then(() =>  ({message: `User ${data.uid} successfully deleted`}))
        .catch(err => err)
});

exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
})

exports.updateUser = functions.https.onCall((data, context) => {
    const {values, uid, photo, disName, phone} = data;
    if (context.auth.token.admin !== true) return {error: 'Tylko admin może edytować użytkowników'}
    return admin.auth().updateUser(uid, {
        email: values.email,
        phoneNumber: phone,
        emailVerified: values.emailVerified,
        password: values.password,
        displayName: disName,
        photoURL: photo,
        disabled: values.disabled
    })
        .then(() =>  ({message: `User ${data.uid} successfully updated`}))
        .catch(err => console.log('error', err))
})