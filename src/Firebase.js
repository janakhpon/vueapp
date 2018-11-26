import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
   
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
