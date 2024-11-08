import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
               <span className="purple"> ABOUT ME </span> 
            </h1>
            <p className="home-about-body">
            I am a 3rd-year Computer Science student at Symbiosis Institute of Technology and currently a  <i><span className="purple">Data Engineering Intern</span></i> at  <i><span className="purple">Bajaj Finserv.</span></i>
              <br />
              <br />Proficient in  <i><span className="purple">Python</span></i> and <i><span className="purple"> Java</span></i>, I enjoy solving complex problems and building innovative solutions. My main interest lies in <i> <span className="purple">Machine Learning</span></i>, exploring technologies to create impactful systems.
              <br />
              <br />
              With a strong academic foundation and a hunger to learn, I am eager to contribute to dynamic teams and projects that challenge my abilities while making a meaningful difference.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ width: "250px", height: "auto" }} />
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>
              Feel free to <span className="purple">connect </span>with me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Armaanjeswani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/armaan-jeswani-3627b2270/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/armaan_jeswani/?hl=en"
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
