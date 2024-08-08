import React from 'react'
import ngodata from './Ngos.json'
import Ngos from './Components/Ngos'
import './App.css'
const Ngomap = () => {
    const style = {
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#FEECE2',
        borderRadius:'10px'
      }
  return (
    <div className="container">
        <h1 style={style} className='h1style'>Welcome Donars</h1>
    <h2 style={{color:'orange'}}>NGOs List</h2>
        <div className="row">
            {ngodata.map((ngo,index)=>
            <div key={index} className='col-md-4'>
                <Ngos ngo={ngo}/>
            </div>)}
        </div>
    </div>
  )
}

export default Ngomap
