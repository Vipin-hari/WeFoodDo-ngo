import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Import the database module
import './css/form.css';
import firebaseConfig from '../firebaseConfig'; 

firebase.initializeApp(firebaseConfig);

const LoginForm = ({ setUsername,setLocation,setType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
      setError('');

      // Fetch user's name from Realtime Database using UID as reference
      const userRef = firebase.database().ref('users').child(userCredential.user.uid);
      userRef.once('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData && userData.name) {
          // Set user email and name
          setUsername(userData.name);
          setLocation(userData.address);
          setType(userData.type);
          // Redirect to the home page
          navigate('/', { state: { email: userCredential.user.email } });
        } else {
          console.log('User data not found.');
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://th.bing.com/th/id/OIP.o01pM7cb-KEA7GT-cC7nEgHaE8?rs=1&pid=ImgDetMain" alt="Login" />
      </div>
      <div className="login-form-container">
        <h2 className="ww  h1style">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-secondary" style={{ backgroundColor: '#FEECE2', color: 'black' }}>Login</button>
          {error && <p className="error-message">{error}</p>}
          <Link to='/signup' style={{ textDecoration: "none", marginLeft: '5px', cursor: 'pointer' }}>new user?</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
