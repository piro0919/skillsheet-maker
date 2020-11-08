/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  appId: process.env.APP_ID,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  measurementId: process.env.MEASUREMENT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export type Project = {
  content: string;
  dbs: string[];
  end: string;
  languages: string[];
  name: string;
  role: string;
  scale: number;
  servers: string[];
  start: string;
};

export type User = {
  background: string;
  birthday: string;
  businesses: string[];
  fields: string[];
  furigana: string;
  name: string;
  operation: string;
  pr: string;
  projects: Project[];
  qualifications: string[];
  sex: string;
  skills: string[];
  stations: string[];
};

export const getUsersId = (id: string): Promise<firebase.firestore.DocumentSnapshot<User>> => (db.collection('users').doc(id).get() as Promise<firebase.firestore.DocumentSnapshot<User>>);

export const getUsers = (): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> => db.collection('users').get();
