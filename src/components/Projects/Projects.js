import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Attendify from "../../Assets/Projects/Attendify.png";
import diabetes from "../../Assets/Projects/diabetes.png";
import movie from "../../Assets/Projects/movie.png";
import airline from "../../Assets/Projects/airline.png";
import psy from "../../Assets/Projects/psy.png";
import edvr from "../../Assets/Projects/edvr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psy}
              isBlog={false}
              title="PhysioMize"
              description="Developed a portable joint angle measurement device for remote physiotherapy, accurately tracking joint angles and user-reported pain during exercises. The device includes a mobile app with real-time feedback, 3D joint models for visualizing movements and pain, secure data storage, and cloud connectivity for remote physiotherapist monitoring, enhancing therapy engagement and effectiveness."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Attendify}
              isBlog={false}
              title="Attendify"
              description="Attendify is a biometric-based Attendance Management System integrated with Power BI for enhanced analytics and reporting. It ensures accurate attendance tracking, transforming raw data into intuitive dashboards for real-time insights into attendance trends and punctuality. Designed for scalability, it empowers organizations to make informed decisions, improving operational efficiency and attendance management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airline}
              isBlog={false}
              title="Airline Management System"
              description="The Airline Management System streamlines airline operations, including flight scheduling, booking, ticketing, and customer management. It offers an intuitive interface for booking flights and efficient tools for airline staff to manage schedules, inventory, and customer data. With real-time updates and robust reporting features, the system improves operational efficiency and enhances the customer experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="The Movie Recommendation System offers personalized movie suggestions based on user preferences. Using TF-IDF Vectorizer and Cosine Similarity, it analyzes movie descriptions to recommend similar films. This system tailors recommendations to users’ interests, enhancing the movie-watching experience and helping users discover new films that match their tastes."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edvr}
              isBlog={false}
              title="EDVR"
              description="Low-cost VR technology makes immersive learning accessible without compromising quality. Personalized microcontrollers with haptic feedback enable precise virtual object manipulation, enhancing the learning experience. Usability testing and feedback loops refine the lab environment, while user-created modules offer flexibility. Strategic collaborations expand market reach, and cross-platform compatible controllers and affordable DIY VR headsets increase accessibility."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Prediction"
              description="The Diabetes Prediction System uses machine learning to assess the likelihood of diabetes based on user data such as age, BMI, and medical history. It provides reliable predictions on diabetes risk, offering users insights to make proactive health decisions. With its user-friendly interface, the system promotes awareness and supports early detection and management of diabetes."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

