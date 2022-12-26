import React from "react"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import journalData from './assets/data/journalData'

export default function App() {

  const cardDataElements = journalData.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="cards-list">
        {cardDataElements}
      </div>
    </div>
  )
}