import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

// Initialize firebase with config params defined in the ".env" file
firebase.initializeApp(process.env.firebase);

const firestore = firebase.firestore();

const messaging = firebase.messaging();
messaging.usePublicVapidKey(process.env.firebase.webPushPublicKey);

export default async ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firestore = firestore;
  Vue.prototype.$messaging = messaging;
};

export {
  firebase,
  firestore,
  messaging
};
