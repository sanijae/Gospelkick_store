// Import relevarnt Packages and Data file
import React, {useState} from 'react'
import './App.css'
import Data from './Data'

export default function App() {

  // Create Hooks to control Data items
  const [search, setSearch] = useState('')
  const [filterCard,setFilterCard] = useState(Data)

// Created seacrh control and action button
 const filterData =(e)=>{
    e.preventDefault()
    // verify weither the search box is empty
    if(search === "") return filterCard(Data)

    // Search the desire item from list
    const filterBySearch = Data.filter((item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    // Update the body with new item
    setFilterCard(filterBySearch)
}

  return (
    <div className='app'>
     <div className='nav'>
      <h3>Gospelkick Store</h3>
      <form className='form' onSubmit={filterData}>
        <input type='text' className='input' onChange={(e)=>setSearch(e.target.value)} placeholder='Search' />
        <button type='submit'>Send</button>
      </form>
     </div>
     <div className='body'>
      {filterCard.map((data,i)=>{
        return(
          <div className='card' key={i}>
            <p className='card_title'>{data.title}</p>
            <p className='card_subtitle'>{data.subtitle}</p>
          </div>
        )
      })}
     </div>
     <div className='footer'>
      <p>Copyrighted &nbsp; &copy; &nbsp; {new Date().getFullYear()} &nbsp; Gospelkick Store All rigth reserved</p>
     </div>
    </div>
  )
}
