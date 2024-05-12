import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import pov from '../poverty/pov1.jpg'; 
function Carousell() {
  return (
    <div className='cc'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pov}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg?t=st=1711966318~exp=1711969918~hmac=da75784d71b7b24ce0e08e2a57216befe50a0ff6daf5765bc4b69027c1a91840&w=1060"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell;