import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function NavScrollExample() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Firebase listener to check authentication state
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setIsLoggedIn(!!user); // Update isLoggedIn state based on user authentication
        });

        return () => unsubscribe(); // Cleanup function
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            setIsLoggedIn(false); // Update isLoggedIn state on logout
        }).catch(error => {
            console.error('Error logging out:', error);
        });
    }

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#FEECE2' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>WeFooDo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/charity'>Food requirements</Nav.Link>
                        <Nav.Link as={Link} to='/ngos'>Ngos</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={isLoggedIn ? handleLogout : handleLogin}>
                        {isLoggedIn ? (
                            <Button variant="outline-danger" type='submit'>Logout</Button>
                        ) : (
                            <Button variant="outline-success" type='submit'>Login</Button>
                        )}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
