import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import pov from '../poverty/pov1.jpg'; 
import pov1 from '../poverty/63293.jpg'; 
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
          src={pov1}
          alt="second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell;