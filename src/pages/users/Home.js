import React from "react";
import ProductList from "../../containers/ProductList";
import compradora from "../../assets/images/1.jpg";
import compradora2 from "../../assets/images/2.jpg";
import compradora3 from "../../assets/images/3.jpg";
import { Carousel } from "react-bootstrap";
import "../../App.css";

export default function Home() {
  return (
    <div>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img
              width="100%"
              className="img-fluid mt-3"
              src={compradora}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="img-fluid mt-3"
              src={compradora2}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="img-fluid mt-3"
              src={compradora3}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}
