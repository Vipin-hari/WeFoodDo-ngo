import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Card.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

function CharityCard() {
  const style = {
    color: 'orangered',
    textDecoration: 'highlight',
    fontSize: '700'
  };

  const [charityData, setCharityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestsRef = firebase.database().ref('requests');
        const usersRef = firebase.database().ref('users');

        const requestsSnapshot = await requestsRef.once('value');
        const requestsData = requestsSnapshot.val();

        const usersSnapshot = await usersRef.once('value');
        const usersData = usersSnapshot.val();

        const mergedData = [];

        for (const userId in usersData) {
          const user = usersData[userId];
          if (requestsData && requestsData[userId]) {
            const request = requestsData[userId];
            const mergedItem = {
              id: userId,
              name: user.name,
              address: user.address,
              email: user.email,
              type: user.type,
              foodType: request.foodType,
              foodCount: request.foodCount
            };
            mergedData.push(mergedItem);
          }
        }

        setCharityData(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean up listeners
    };
  }, []);

  const handleAddressClick = (address) => {
    // Encode the address for the URL
    const encodedAddress = encodeURIComponent(address);
    // Open a new tab/window with the Google Maps URL
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <>
    <div className="cc">
    <h1 className="h1style ww" >Welcome Donors</h1>
    <h2 className='h1style' style={{marginLeft:'15px'}} >Food Requirements</h2>
    <div className='card-container'>
      {charityData.map(item => (
        <div className="card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className='mini'>
              <p className="card-text" onClick={() => handleAddressClick(item.address)}>Address: {item.address}</p>
              <p className="card-text">Email: {item.email}</p>
              <p className="card-text" style={style}>Type: {item.type}</p>
              <p className="card-text">Food Type: {item.foodType}</p>
              <p className="card-text">Food Count: {item.foodCount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default CharityCard;
