import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/robot_dev.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row className="align-items-center">
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hello There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> SEB FOURNIER</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col
                            md={5}
                            style={{
                                paddingBottom: 20,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "visible",
                            }}
                        >
                            <img
                                src={homeLogo}
                                alt="home pic"
                                style={{
                                    height: "550px",
                                    maxWidth: "none",
                                    objectFit: "contain",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />

            <Container>
                <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                    <Col md={12} className="home-about-social">
                        <h1>Find Me On</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/sebastien-fournier-software-robotics"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/sebastienfournierconnect/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
