import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './css/ngo.css'

const EqualDivisionsHomepage = ({ user, location, type }) => {
  const [foodType, setFoodType] = useState('');
  const [foodCount, setFoodCount] = useState('');
  const [foodInfo, setFoodInfo] = useState('');
  const [currentUserUid, setCurrentUserUid] = useState('');

  useEffect(() => {
    const fetchCurrentUserUid = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          setCurrentUserUid(user.uid);
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUserUid();
  }, []);

  const handleSubmit = () => {
    if (foodType && foodCount && currentUserUid) {
      const requestsRef = firebase.database().ref('requests').child(currentUserUid);
      requestsRef.set({
        foodType,
        foodCount,
      })
      .then(() => {
        setFoodInfo(`Food Type: ${foodType}\nFood Count: ${foodCount}\nThe request has been updated successfully`);
      })
      .catch((error) => {
        console.error('Error updating request:', error);
      });
    } else {
      alert("Please select food type and enter food count.");
    }
  };
  

  return (
    <>
      <div className="containerr">
        <div>
          <p id="welcome">Welcome, {type} {user} </p>
        </div>
        <div>
          <p id="address">Address: {location}</p>
        </div>
        <div className="sections">
          <div className="section">
            <p>Food item type:</p>
            <input type="radio" id="veg" name="foodType" value="Veg" onChange={(e) => setFoodType(e.target.value)} />
            <label htmlFor="veg">Veg</label><br />
            <input type="radio" id="nonveg" name="foodType" value="Non-veg" onChange={(e) => setFoodType(e.target.value)} />
            <label htmlFor="nonveg">Non veg</label><br />
            <div className="input-container">
              <label htmlFor="foodCount">Enter food count:</label>
              <input type="number" id="foodCount" name="foodCount" min="0" value={foodCount} onChange={(e) => setFoodCount(e.target.value)} />
              <br />
              <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div className="section">
            <div id="foodInfo" className='rightside'><h3>Your requests will be listed here</h3>{foodInfo}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EqualDivisionsHomepage;
