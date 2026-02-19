import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

function FindMeOn() {
    const { t } = useLanguage();

    return (
        <Container fluid className="contact-section" id="contact">
            <Container>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 className="project-heading">{t("findMeOn.title")}</h1>
                        <p className="contact-subtitle">{t("findMeOn.subtitle")}</p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="mailto:seb.fournier.tech@proton.me"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <MdOutlineEmail />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/sebastien-fournier-software-robotics/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
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
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default FindMeOn;
