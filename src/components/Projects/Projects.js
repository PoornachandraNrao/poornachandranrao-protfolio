import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dice from "../../Assets/Projects/21.png";
import stock from "../../Assets/Projects/20.png";
import pet_squad from "../../Assets/Projects/19.png";
import iphone from "../../Assets/Projects/18.png";
import tulucentre from "../../Assets/Projects/17.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet_squad}
              isBlog={false}
              title="Advanced Door Lock System with Facial Recognition and Remote Control"
              description="Developed a smart door lock system using Raspberry Pi 4, IoT, and OpenCV (LBPH) for facial recognition, enabling keyless access with 90%+ accuracy and under 3-second response time. Integrated camera, servo motor, Twilio API for SMS alerts, and a Flask web app for remote control, validated through real-time testing."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tulucentre}
              isBlog={false}
              title="Weather Monitoring Dashboard (College-Funded, Ongoing)"
              description="Designed and implemented an IoT-based weather monitoring dashboard using Raspberry Pi, Python (PyQt5, Flask), and cloud integration to display real-time data on temperature, humidity, rainfall, air quality, and wind. Completed as a college-supported project, the system was deployed permanently at the NITTE campus entrance."
              demoLink="https://nmamit-weather-station.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Weather Station"
              description="Developed a stock price prediction app using Python and Streamlit, leveraging historical data and financial indicators to forecast trends with interactive visualizations. Built an IoT weather station using ESP8266 NodeMCU and DHT11 sensor, integrating LCD display and Arduino IDE for real-time monitoring of temperature and humidity."
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="8-Bit Sequential Counter with 7-Segment Display (Verilog)"
              description="Designed and implemented an 8-bit sequential counter in Verilog using two 4-bit counters with multiplexed 7-segment display output. Incorporated clock division and custom logic for real-time updates, and verified functionality through simulation. Gained practical exposure to digital design, sequential logic, and Verilog programming."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iphone}
              isBlog={false}
              title="Interactive Wedding Invitation Website (With integration of AI)"
              description="Built a responsive wedding invitation website using HTML, CSS, and JavaScript with features like countdown timers, image galleries, and a 3D animated card. Added a “Send Your Wish” section with heart animations and Google Maps support to enhance interactivity and user experience."
              demoLink="https://chethan-weds-thejaswini.on.drv.tw/inv5/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
