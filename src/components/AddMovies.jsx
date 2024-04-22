import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addMovie, GetNames } from '../data/crud.js'

const AddEmployer = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [year, setYear] = useState('')
	const setMovies = useStore(state => state.setMovies)

	const handleSubmit = async (event) => {
		// skapa ett objekt för ny film
		// lägg till i databasen
		// hämta listan med anställda igen
		if ( newMovies === '' ) {
			return null }
			//om listan är tom så döljs hela film listan och den sparas inte

		setIsLoading(true)
		event.preventDefault()
		const newMovies = { title: title , year: year}
		
		try {
			await addMovie(newMovies)
			setTitle('')
			setYear('')
			setMovies(await GetNames())
		} catch {
			// TODO: visa felmeddelande för användaren

		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form">
			<h3> Register a new movie  </h3>
			<section className="column">
				<label> Namn på film</label>
				<input type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> År </label>
				<input type="text"
					value={year}
					onChange={e => setYear(e.target.value)}
					/>
			</section>

			<button className="RegisterBtn"
				disabled={isLoading}
				onClick={handleSubmit} type="submit"> Register </button>
			</form>
		</section>
	)
}

export default AddEmployer

