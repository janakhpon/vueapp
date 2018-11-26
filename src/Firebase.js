import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyARl4T2n4ayvSGZYt_AhQ1dCaD71QvX_Qs",
    authDomain: "vueapp-2e577.firebaseapp.com",
    databaseURL: "https://vueapp-2e577.firebaseio.com",
    projectId: "vueapp-2e577",
    storageBucket: "",
    messagingSenderId: "203032360618"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
