import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCT4WQhshLhL4aoFRuVGBiHQxq6HD-YqcY",
	authDomain: "fed20-awesome-todos.firebaseapp.com",
	projectId: "fed20-awesome-todos",
	storageBucket: "fed20-awesome-todos.appspot.com",
	messagingSenderId: "891964646459",
	appId: "1:891964646459:web:216e89da27fc995f98681e"
};

// init firebase
const app = initializeApp(firebaseConfig)

// get firebase firestore instance
const db = getFirestore(app)

export {
	app as default,
	db,
}
