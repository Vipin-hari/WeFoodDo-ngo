import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

firebase.initializeApp(firebaseConfig);

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: 'NGO',
    tinNumber: '',
    pincode: '',
    city: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, type, tinNumber, pincode, city, email, password } = formData;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const userRef = firebase.database().ref('users').child(uid); // Reference to the user's UID

        // Push the form data to Firebase Realtime Database
        userRef.set({
          name,
          address,
          type,
          tinNumber: type === 'NGO' ? tinNumber : '', // Include TIN number only for NGOs
          pincode,
          city,
          email,
        })
        .then(() => {
          alert('Form data submitted successfully');
          navigate('/login');

          // Reset form data
          setFormData({
            name: '',
            address: '',
            type: 'NGO',
            tinNumber: '',
            pincode: '',
            city: '',
            email: '',
            password: '',
          });
        })
        .catch((error) => {
          console.error('Error submitting form data:', error);
        });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
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
          <input type="text" className="form-control" id="tinNumber" name="tinNumber" value={formData.tinNumber} onChange={handleChange} />
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
  );
};

export default SignUpForm;
