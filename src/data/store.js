import { create } from 'zustand'


// set, create


const useStore = create((set) => ({
    movies: [],
    setMovies: (newMovies) => set({ movies: newMovies }),
    addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}))


export { useStore }