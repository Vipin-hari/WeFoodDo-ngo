import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Card.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

function Ngofetch() {
  const style = {
    color: 'orangered',
    textDecoration: 'highlight',
    fontSize: '700'
  };

  const [ngoData, setNgoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = firebase.database().ref('users');

        const usersSnapshot = await usersRef.once('value');
        const usersData = usersSnapshot.val();

        const ngoUsers = Object.values(usersData).filter(user => user.type === 'NGO');

        setNgoData(ngoUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean up listeners
    };
  }, []);

  return (
    <>
    <div className="cc">
    <h1 className="h1style ww" >NGO List</h1>
    <div className='card-container'>
      {ngoData.map(user => (
        <div className="card" key={user.email}>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <div className='mini'>
              <p className="card-text">Address: {user.address}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text" style={style}>Type: {user.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Ngofetch;
