import { useState } from 'react'

import './App.css'
import Employees from './components/NameForMovies.jsx'
// import Employees from './components/NameForEmployes'
import AddEmployer from './components/AddMovies.jsx'

function App() {
  

  return (
    <div>

  <h1> Namn på filmer och år</h1>
  <AddEmployer />
  <Employees  />

    </div>
  )
}

export default App
