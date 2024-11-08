import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCard";
import achievementsData from "./achievementsData";
import "./Achievements.css";

function Achievements() {
  return (
    <Container fluid className="achievements-section">
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "20px" }}>
          My <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the milestones I am proud of!
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {achievementsData.map((achievement, index) => (
            <Col md={4} className="achievement-card" key={index}>
              <AchievementCard achievement={achievement} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
