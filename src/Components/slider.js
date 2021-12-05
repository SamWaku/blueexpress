//Boostrap Js
import { Carousel } from 'react-bootstrap';
//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Slider Photos
import pic1 from "../Images/b1.jpg";
//Slider CSS
import './slider.css'

function Slider() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}


export default Slider;