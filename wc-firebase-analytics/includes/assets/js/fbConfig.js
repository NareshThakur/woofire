
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

if( firebaseDetails.webc_fb_apiKey == "" ) console.log('Firebase not configured correctly.');
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: firebaseDetails.webc_fb_apiKey,
    authDomain: firebaseDetails.webc_fb_authDomain,
    projectId: firebaseDetails.webc_fb_projectId,
    storageBucket: firebaseDetails.webc_fb_storageBucket,
    messagingSenderId: firebaseDetails.webc_fb_messagingSenderId,
    appId: firebaseDetails.webc_fb_appId,
    measurementId: firebaseDetails.webc_fb_measurementId
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(app);
//console.log(analytics);
export { analytics, logEvent };