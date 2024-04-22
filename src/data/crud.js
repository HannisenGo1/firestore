import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite'

import { db } from './fire.js'

const collectionName = 'movies'
const collectionRef = collection(db, collectionName)


async function GetNames() {
	const NameCollection = collection(db, collectionName)
	const NameSnapshot = await getDocs(NameCollection)
	 console.log('getMovies: snapshot is', NameSnapshot)

	const NameList = NameSnapshot.docs.map(doc => withKey(doc))
	return NameList
}
// Use this if you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

async function addMovie(movies) {
	// referens till collection 'employees'
	await addDoc(collectionRef, movies)
}

async function deleteMovie(key) {
	const docRef = doc(collectionRef, key)
	// console.log('deleteEmployee: ', docRef);
	deleteDoc(docRef)
}

async function editMovie(key, updatedMovie) {
	// vi behöver en "collection reference"
	// vi skapar en referens till dokumentet vi ska ändra på
	// leta upp en funktion som kan uppdatera ett dokument
	const docRef = doc(collectionRef, key)

	// Två alternativ för att ändra:
	// updateDoc - uppdaterar ett befintligt objekt
	// setDoc - uppdaterar eller skapar ett objekt
	await updateDoc(docRef, updatedMovie)
}


export { GetNames, addMovie, deleteMovie, editMovie }