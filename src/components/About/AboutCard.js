import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Poornachandra N Rao  </span>
            from <span className="purple"> Udupi, India.</span>
            <br />
            I am currently pursuing my B.tech in Electronics and Communication Engineering from NMAMIT, Nitte.
            <br/>
            <br/>
            <p>
            My studies focus on exploring modern technologies in Embedded Systems, IoT, PCB Design, and Digital Design. 
            Alongside my coursework, I am also enhancing my skills in programming languages like 
            <span className="purple"> C and Verilog ,</span>
              and working on projects involving <span className="purple">IoT integration, real-time dashboards, and interactive web development</span>.
              I am passionate about combining hardware and software to build innovative solutions, and
                I aim to specialize in areas like <span className="purple">IoT-based applications, Embedded Systems, Web Development, </span> and Digital Electronics in the future.
            </p>
            <br />
            <br />
            Apart from These, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photo & Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Poster Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontFamily: "'Playfair Display', serif" }}>
            "Creative they say, Efforts they don't see."
          </p>
          <footer className="blockquote-footer">Poornachandra </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
