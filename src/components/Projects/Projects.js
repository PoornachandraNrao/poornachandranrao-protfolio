import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectDetails from "./ProjectDetails"; 
import Particle from "../Particle";

// images
import dice from "../../Assets/Projects/21.png";
import stock from "../../Assets/Projects/20.png";
import pet_squad from "../../Assets/Projects/19.png";
import iphone from "../../Assets/Projects/18.png";
import tulucentre from "../../Assets/Projects/17.png";
import tulucentre1 from "../../Assets/Projects/22.png";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Put all project data in one place
  const projectList = [
    {
      imgPath: pet_squad,
      title: "Advanced Door Lock System with Facial Recognition and Remote Control",
      description:
        "Developed a smart door lock system using Raspberry Pi 4, IoT, and OpenCV (LBPH) for facial recognition, enabling keyless access with 90%+ accuracy and under 3-second response time. Integrated camera, servo motor, Twilio API for SMS alerts, and a Flask web app for remote control, validated through real-time testing.",
      longDescription:`
      This project aimed at improving home security by developing a smart door lock system using Raspberry Pi 4, a camera module, and OpenCV (LBPH) for facial recognition. The system integrated a servo motor for automated unlocking, Twilio API for SMS alerts, and a Flask web app for remote access, achieving over 90% accuracy with a response time under 3 seconds, verified through real-time testing.
      What was done: Built a keyless smart lock using facial recognition and IoT.
      Why: To enhance home security with modern, automated access control.
      Advantage: Accurate, fast, and cost-effective compared to commercial smart locks.
      Future use: Can be upgraded with cloud storage, AI-based recognition, voice assistants, and integration into smart home systems.
      `
      },
    {
      imgPath: tulucentre,
      title: "Weather Monitoring Dashboard (College-Funded, Ongoing)",
      description:
        "Designed and deployed a dual-Raspberry Pi IoT weather monitoring system with advanced environmental sensors (CO, O₃, PM, wind, rainfall, temperature, humidity). The rooftop Pi with a custom KiCad board collects sensor data and uploads it to Firebase Cloud, while a base-station Pi at the college entrance auto-connects to Wi-Fi and displays real-time dashboards via Python (PyQt5, Flask).",
      longDescription: `
        This project involved building a full-scale IoT weather monitoring system for the NITTE campus. A custom sensor board (designed in KiCad) was connected to a Raspberry Pi on the rooftop, measuring CO (EC4-500-CO), Ozone (SGX-4O3-20), Temperature/Humidity (SHT31), PM (IH-PMC-001), Wind (SN-*-CFSFX-N01), and Rainfall (tipping bucket). The data was uploaded to Firebase Cloud through Python scripts. At the base station, another Raspberry Pi auto-connects to Wi-Fi, authenticates, fetches data from Firebase, and runs an interactive Python dashboard built with PyQt5 and Flask, shown on a dedicated monitor at the campus entrance.
        What was done: • Designed custom PCB in KiCad and interfaced multiple sensors with Raspberry Pi. 
        • Built a cloud-backed data pipeline using Firebase. 
        • Developed a PyQt5 + Flask dashboard for kiosk-style real-time display.
        Why: To provide students, staff, and visitors with live environmental and air-quality insights instead of relying on generic weather APIs. 
        Advantage: Permanent, scalable,with multi-sensor integration. 
        Future use: Expansion to mobile/web apps, predictive analytics with ML, and integration into a smart campus ecosystem.
      `,
      demoLink: "https://nmamit-weather-station.web.app",
    },
    {
      imgPath: stock,
      title: "Weather Station",
      description:
        "Developed a stock price prediction app using Python and Streamlit, leveraging historical data and financial indicators to forecast trends with interactive visualizations. Built an IoT weather station using ESP8266 NodeMCU and DHT11 sensor, integrating LCD display and Arduino IDE for real-time monitoring of temperature and humidity.",
      longDescription: `
        This project focused on building a basic IoT weather station using an ESP8266 NodeMCU microcontroller with a DHT11 sensor to measure temperature and humidity, displaying real-time output on both a 16x2 LCD and the serial monitor. The system was coded in Arduino IDE and assembled into a simple model structure for demonstration.
        
        What was done: Designed a low-cost weather station with ESP8266, DHT11, and LCD.
        Why: To gain practical exposure in IoT, sensor integration, and Arduino programming.
        Advantage: Provides real-time temperature and humidity monitoring at low cost.
        Future use: Can be enhanced with more sensors (air quality, rainfall) and cloud-based dashboards.
      `
    },
    {
      imgPath: dice,
      title: "8-Bit Sequential Counter with 7-Segment Display (Verilog)",
      description:
        "Designed and implemented an 8-bit sequential counter in Verilog using two 4-bit counters with multiplexed 7-segment display output, clock division, and custom logic for real-time updates. Verified functionality through simulation, gaining hands-on experience in digital design, sequential logic, and Verilog programming.",
      longDescription: `
        This project involved designing and implementing an 8-bit sequential counter using two 4-bit counters, clock division, and a multiplexed 7-segment display. The goal was to understand sequential logic, digital design, and hardware interfacing while ensuring real-time updates and verified functionality through simulation.

        What was done: Built an 8-bit counter with 7-segment output in Verilog.
        Why: To practice sequential logic design and real-time digital systems.
        Advantage: Simple, cost-effective way to display higher counts with limited hardware.
        Future use: Can be applied in digital clocks, timers, and embedded system counters.
      `
    },

    {
      imgPath: iphone,
      title: "Interactive Wedding Invitation Website (With AI Integration)",
      description:
        "Built a responsive wedding invitation website using HTML, CSS, and JavaScript with features like countdown timers, image galleries, and a 3D animated card with audio. Added a “Send Your Wish” section with heart animations, Firebase integration, and Google Maps support to enhance interactivity and user experience.",
      longDescription:`
        This project focused on creating a responsive and interactive wedding invitation website that combined creative design with modern front-end development. It included features such as countdown timers, a 3D animated invitation card with audio, an auto-scrolling image gallery, and a guest participation section “Send Your Wish”. Additionally, Google Maps support was added for event locations, making the website a digital alternative to traditional printed invitations.
        What was done: Designed and deployed a multimedia wedding invitation website with interactive features, and Google Maps support.
        Advantage: Provides real-time event details, improves guest engagement through wishes, and enhances the overall experience with animations and audio.`,
      demoLink: "https://chethan-weds-thejaswini.on.drv.tw/inv5/",
    },

    
    {
      imgPath: tulucentre1,
      title: "Ultrasonic Sensor using Raspberry Pi4 and Linux Kernel Module",
      description:
        "We developed an ultrasonic distance measurement system using a Raspberry Pi 4 and the HC-SR04 sensor. The system was programmed in C with a custom Linux Kernel Module to control GPIOs and measure distances in real time. Additionally, we created a website using HTML and CSS for the front end and linked the sensor data to it using Python.",
      longDescription:`
        In this project, we developed an ultrasonic distance measurement system using a Raspberry Pi 4 and the HC-SR04 sensor. The system was implemented in C with system calls and a custom Linux Kernel Module to control GPIO pins, send trigger pulses, and capture echo timings with microsecond precision. It measures distances between objects in meters and provides real-time readings for embedded applications. Additionally, we created a web interface using HTML and CSS for the front end, while Python was used to link and display the sensor data on the website. `,
    },
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShowDetails(true);
  };

  const handleClose = () => setShowDetails(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectList.length - 1 ? 0 : prev + 1));
  };

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
          {projectList.map((proj, idx) => (
            <Col
              md={4}
              className="project-card"
              key={idx}
              onClick={() => handleOpen(idx)} // ⬅️ pass index instead of project
              style={{ cursor: "pointer" }}
            >
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <ProjectDetails
        show={showDetails}
        handleClose={handleClose}
        project={projectList[currentIndex]}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Container>
  );
}

export default Projects;
