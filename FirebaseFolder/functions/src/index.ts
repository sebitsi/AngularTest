import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


export const helloWorld = functions.https.onRequest((request, response) => {

 response.send("Hello from this Firebase!");
});

exports.insertIntoDB = functions.https.onRequest((request, response) => {
    const text = request.query.text;   //fetch query text
    const textUpper = text.toUpperCase();   // convert text to upper case
    admin.database().ref('/test').push({text: text, textUpper: textUpper}).then(snapshot => {
        response.redirect(303, snapshot.ref);
    })
});

// exports.convertToUppercase = functions.database.ref('/test/{pushId}/text').onWrite(event => {
//     const text = event.data.text();
//     const upperCaseText = text.toUpperCase();
//     return event.data.ref.parent.child('upperCaseText').set(upperCaseText);
// })
