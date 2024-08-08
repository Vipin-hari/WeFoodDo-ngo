import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import firebaseConfig from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

firebase.initializeApp(firebaseConfig);

const DonorSignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
        const { email, password } = formData;
        const auth = getAuth();

        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Get the UID of the newly created user
            const uid = userCredential.user.uid;

            // Reference to the user under the 'users' path with the UID as the key
            const userRef = firebase.database().ref('users').child(uid);

            // Push the form data to Firebase Realtime Database
            userRef.set({
                email,
                type: 'donor', // Set the type as "donor"
            })
            .then(() => {
                console.log('Donor sign up successful');
                alert("Donor sign up successful");
                navigate('/login');

                // Reset form data
                setFormData({
                    email: '',
                    password: '',
                });
            })
            .catch((error) => {
                console.error('Error storing donor data:', error);
            });
        })
        .catch((error) => {
            console.error('Error signing up donor:', error);
        });
    };

    return (
        <form className="container-sm my-4 p-4 border rounded" style={{ backgroundColor: 'beige' }} onSubmit={handleSubmit}>
            <h3 className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>Donor Sign Up</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email ID</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-secondary" style={{ backgroundColor: '#FEECE2', color: 'black' }}>Sign Up</button>
        </form>
    );
};

export default DonorSignUpForm;
