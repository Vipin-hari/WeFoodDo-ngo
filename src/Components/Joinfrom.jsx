import React from 'react';
import { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../firebase';
import { initializeApp } from 'firebase/app';
const Joinfrom = () => {
  initializeApp(firebaseConfig)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: 'NGO',
    tinNumber: '',
    pincode: '',
    city:'',
    email: '',
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTINChange = (e) => {
    let value = e.target.value;
    // Limit TIN number to 11 characters
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    // Validate alphanumeric characters
    value = value.replace(/[^a-zA-Z0-9]/g, '');
    setFormData({
      ...formData,
      tinNumber: value,
    });
  };

  const handleSubmit = ()=>{
    try {
      createUserWithEmailAndPassword(getAuth(),formData.email,formData.password)
      .then(()=>{
        alert("Created")
      });
    } catch (error) {
      console.log(error);
    }
    
  return (
    <div>
       <form className="container-sm my-4 p-4 border rounded" style={{backgroundColor:'beige'}} onSubmit={handleSubmit}>
            <h3 className="mb-4" style={{display:'flex',justifyContent:'center'}}>Join Our Community</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <select className="form-select" id="type" name="type" value={formData.type} onChange={handleChange}>
          <option value="NGO">NGO</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
      {formData.type === 'NGO' && (
        <div className="mb-3">
          <label htmlFor="tinNumber" className="form-label">TIN Number</label>
          <input type="text" className="form-control" id="tinNumber" name="tinNumber" value={formData.tinNumber} onChange={handleTINChange} />
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="pincode" className="form-label">Pincode</label>
        <input type="text" className="form-control" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-secondary" style={{backgroundColor:'#FEECE2',color:'black'}}>Send Request</button>
    </form>


    </div>
  )
}
}

export default Joinfrom;
