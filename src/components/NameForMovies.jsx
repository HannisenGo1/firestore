 import { useState } from 'react'
import { GetNames } from '../data/crud.js'
import { useStore } from '../data/store.js'
import ViewMovie from './ViewMovies.jsx'

const Employees = () => {
	const store = useStore(); // Använd hela useStore-objektet
    const { movies } = store;
	

	const handleGetMovie = async () => {
		store.setMovies(await GetNames())
	}

	return (
		<div>
			<h2> All the movies </h2>
			<div>
				<button className="RegisterBtn" onClick={handleGetMovie}> Show movies! </button>
			</div>
			{movies.map(e => (
				<ViewMovie key={e.key} movies={e} />
			))}
		</div>
	)
}

export default Employees