import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiArduino, SiKicad, SiEclipseide } from "react-icons/si";
import { FaMicrochip, FaProjectDiagram, FaCode } from "react-icons/fa";
  import { GiCircuitry } from "react-icons/gi";
  import { MdDeveloperBoard } from "react-icons/md";
  
  import {
  DiPython,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino title="Arduino / IoT" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad title="KiCad PCB Design" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide title="Eclipse IDE" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip title="Cadence" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiCircuitry title="LTSpice Simulation" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdDeveloperBoard title="Code Compose Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode title="Modulus Toolbox" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram title="Xilinx Vivado / FPGA Design" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode title="fusion360" />
      </Col>
    </Row>
  );
}

export default Techstack;