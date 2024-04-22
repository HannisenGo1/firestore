import { useState } from 'react'
import {GetNames, editMovie } from '../data/crud.js'
import { useStore } from '../data/store.js'

const EditMovie = ({ movies, whenEditDone }) => {
	console.log('vid redigering', movies)
	const [disableButton, setDisableButton] = useState(false)
	const [title, setTitle] = useState(movies.title)
	const [year, setYear] = useState(movies.year)
	const setMovies = useStore(state => state.setMovies)

	const handleSave = async () => {
		// 0. stäng av formuläret så användaren inte kan skicka igen
		// 1. anropa funktionen editEmployee i crud.js
		// 2. hämta ändringarna från db med getEmployees i crud.js
		// 3. anropa setEmployees i store.js
		// 4. anropa whenEditDone så att vi stänger formuläret

		setDisableButton(true)
		const updatedMovies = { title, year }
		await editMovie(movies.key, updatedMovies)
		const updatedList = await GetNames()
		setMovies(updatedList)
		whenEditDone()
	}

	return (
		<>
		<section className="change-Info">
			<section className="name-change">
				<label>Name</label>
				<input type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					/>
			</section>
			<section className="occ-change">
				<label>year</label>
				<input type="text"
					value={year}
					onChange={e => setYear(e.target.value)}
					/>
			</section>
		</section>
		<button disabled={disableButton} onClick={handleSave}> 💾 </button>
		</>
	)
}

export default EditMovie