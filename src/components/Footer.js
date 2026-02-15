import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext";

function Footer() {
    const { t } = useLanguage();
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>©{year} Sébastien Fournier | Portfolio | {t("footer.designed")}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/sebastien-fournier-software-robotics/"
                                style={{ color: "#e0e0e0" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://github.com/sebastien-fournier-software-robotics"
                                style={{ color: "#e0e0e0" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
