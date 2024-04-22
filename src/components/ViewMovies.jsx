import { deleteMovie, GetNames } from "../data/crud.js"
import { useStore } from '../data/store.js'
import { useState } from 'react'
import EditMovie from './EditMovies.jsx'

const ViewMovie = ({ movies }) => {
	
	const [isLoading, setIsLoading] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const setMovies = useStore(state => state.setMovies)

	const handleFire = async () => {
		setIsLoading(true)
		await deleteMovie(movies.key)
		const movieFromDb = await GetNames()
		setMovies(movieFromDb)
		setIsLoading(false)
	}

	return (
		<section className="row border-bottom alternate">
			{isEditing ? (
				<EditMovie
					movies={movies}
					whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
				<div className="flex-grow"> {movies.title} from year {movies.year}. </div>
				<button onClick={() => setIsEditing(true)}> 🖊️ </button>
				<button disabled={isLoading} onClick={handleFire}> Delete </button>
				</>
			)}
		</section>
	)
}

export default ViewMovie