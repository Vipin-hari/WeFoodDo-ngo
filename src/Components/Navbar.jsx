import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Navbarr() {
  const location = useLocation();
  const userEmail = location.state ? location.state.email : null; // Get the email from the location state
  const navigate = useNavigate();
  const user = firebase.auth().currentUser; 
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Sign out the user
      navigate('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FEECE2' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">WeFooDo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Conditionally render links based on user authentication */}
            {user ? (
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/charity">Food Requirements</Nav.Link>
                <Nav.Link as={Link} to="/ngos">NGO's</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            {/* Conditionally render logout button if user is logged in */}
            {user && (
              <div>
                <span style={{marginRight:'10px'}}>Welcome Donor</span>
                <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
