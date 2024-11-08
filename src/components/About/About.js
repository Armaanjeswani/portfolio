import React from "react";
import { Container,} from "react-bootstrap";
import Techstack from "./Techstack";

function skill() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          MY<strong className="purple"> SKILLS </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default skill;
