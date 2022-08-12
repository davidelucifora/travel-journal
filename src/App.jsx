import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import CardList from './components/cardList'
function App() {

  return (
    <div className="App">
      <Navbar />
      <CardList />
    </div>
  )
}

export default App
