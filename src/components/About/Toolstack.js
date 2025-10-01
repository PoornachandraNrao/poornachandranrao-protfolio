
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNetlify,
  SiCanva,
  SiFigma,
  SiPhotopea,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiVercel,
  SiGithub,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhotopea/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel/>
      </Col><Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;
