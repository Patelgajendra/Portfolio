import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import master1 from "../assets/img/meter1.svg"
import master2 from "../assets/img/meter2.svg"
import master3 from "../assets/img/meter3.svg"
import colorsharp from "../assets/img/color-sharp.png"
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>**Front-End Development:**
                                    - React.js, JavaScript (ES6+), HTML5, CSS3, Redux, Context API

                                    <br></br>**Back-End Development:**
                                    - Node.js, Express.js, RESTful API Development, Middleware, API Security</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className='item'>
                                        <img src={master2} alt="Image" />
                                        <h5>ReactJs</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master1} alt="Image" />
                                        <h5>Html</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master3} alt="Image" />
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master2} alt="Image" />
                                        <h5>NodeJs</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master2} alt="Image" />
                                        <h5>MongoDB</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master2} alt="Image" />
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={master2} alt="Image" />
                                        <h5>Git&GitHub</h5>
                                    </div>
                                </Carousel>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <img src={colorsharp} alt="" className='background-image-left' />
            </section>
        </>
    )
}
