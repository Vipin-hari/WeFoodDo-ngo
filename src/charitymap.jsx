import React from 'react'
import CharityCard from './Components/CharityCard';
import charitiesData from './Charities.json';
import './App.css';
const charitymap = () => {
    const style = {
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#FEECE2',
        borderRadius:'10px'
      }
  return (
    <div className="container">
    <h1 style={style} className='h1style'>Welcome Donars</h1>
    <h2 style={{color:'orange'}}>Charity List</h2>
    <div className="row">
      {charitiesData.map((charity, index) => (
        <div key={index} className="col-md-4">
          <CharityCard charity={charity} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default charitymap
