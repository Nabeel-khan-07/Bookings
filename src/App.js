import React, { useState } from 'react'
import Tours from './Components/Tours'
import data from './Data'

const App = () => {

  const [tours,setTours]=useState(data);

  function removeHandler(id){
    const remove=tours.filter(tours=>tours.id !==id);
    setTours(remove);
  }

  if (tours.length ===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={()=>setTours(data)}>Refresh</button>
      </div>
      
    )
  }

  
  return (
    <div className='App'>
      <Tours tours={tours} removeHandler={removeHandler}></Tours>
    </div>
  )
}

export default App