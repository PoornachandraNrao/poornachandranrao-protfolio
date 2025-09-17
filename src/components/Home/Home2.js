import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I enjoy exploring innovative technologies and applying my skills to create
              <i> 
                <b className="purple"> impactful solutions. </b>
              </i>
              <br />
              <br />I am good at
              <i> 
                <b className="purple"> Embedded Systems, IoT, and Digital Design. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">PCB Boards</b>
              </i>
                <i> Real-time dashboards,</i>
              <i>
                <b className="purple"> Innovative hardware projects</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing 
                <i><b className="purple"> Websites </b></i> and 
                <i><b className="purple"> PCB Designing</b></i> with 
                <i><b className="purple"> HTML,CSS</b></i> and 
                <i><b className="purple"> KiCad</b></i>, along with 
                <i><b className="purple"> IoT–Hardware Integration</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/poornachandra-n-rao-986b79328/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/justt.poornaaa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
