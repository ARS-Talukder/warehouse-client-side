import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.postimg.cc/R0k8t59L/banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Headphone</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.postimg.cc/BQ4rN0Fh/banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>VR Box</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.postimg.cc/VvRH2JtK/banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Gadgets</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;