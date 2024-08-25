// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Calendar } from "./client";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAFxba0J2sA7asx4IB1zx8Nmejgz8QLO_U",
	authDomain: "calendar-ts-de5ab.firebaseapp.com",
	projectId: "calendar-ts-de5ab",
	storageBucket: "calendar-ts-de5ab.appspot.com",
	messagingSenderId: "623289315944",
	appId: "1:623289315944:web:795426eb178afb9bba81dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

Calendar.Display();
