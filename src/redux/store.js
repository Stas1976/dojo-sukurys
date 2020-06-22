import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyAyzmuAjvgtDRuy8mdEywHSXbDjgIuOruw",
  authDomain: "sukurys-c15f7.firebaseapp.com",
  databaseURL: "https://sukurys-c15f7.firebaseio.com",
  projectId: "sukurys-c15f7",
  storageBucket: "sukurys-c15f7.appspot.com",
  messagingSenderId: "136727089197",
  appId: "1:136727089197:web:e713cf1c2528bca47da8a4",
};

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const authUser = firebase.auth();
export const storage = firebase.storage();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: formReducer,
  reducers,
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  composeEnchancers(applyMiddleware(thunk))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
