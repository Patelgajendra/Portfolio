import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ek.png";
import projImg2 from "../assets/img/sg.png";
import projImg3 from "../assets/img/po.png";
import projImg4 from "../assets/img/project-img1.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import gif1 from "../assets/img/pp.gif";
import gif2 from "../assets/img/ppp.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Project() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    }
  ]
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>Developed a full-featured e-commerce application using the MERN stack. The platform supports user authentication, product listings, shopping cart functionality, and secure payment processing. <br/>Created a dynamic news aggregation application with the MERN stack, providing real-time updates from various sources. Integrated external APIs to fetch and display news articles, categorized by topic and region.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div>
                   <img src={gif1}  alt="" />
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <div>
                   <img src={gif2}  alt="" />
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>}
                    </TrackVisibility>
                  </Col>
        </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
          </section>
        </>
        )
}
