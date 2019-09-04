import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// uses firebase config from ".env" file
firebase.initializeApp(process.env.firebase);

const firestore = firebase.firestore();

export default async ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firestore = firestore;
};

export { firebase, firestore };
