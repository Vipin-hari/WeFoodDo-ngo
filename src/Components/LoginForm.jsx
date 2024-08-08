import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate hook
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../Form.css';
import firebaseConfig from '../firebaseConfig'; 
import login from '../poverty/login.jpg'
firebase.initializeApp(firebaseConfig);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user.email);
      setError('');
      
      // Redirect to the home page ("/") along with the email as a URL parameter
      navigate('/', { state: { email: userCredential.user.email } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={login} alt="Login " />
      </div>
      <div className="login-form-container">
        <h2 className='ww  h1style'>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-secondary" style={{backgroundColor:'#FEECE2',color:'black'}}>Login</button>
          {error && <p className="error-message">{error}</p>}
          <Link to='/signupdonor' style={{textDecoration:"none",marginLeft:'5px',cursor:'pointer'}} >new user?</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
