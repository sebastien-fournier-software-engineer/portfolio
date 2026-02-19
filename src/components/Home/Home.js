import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ParticleSphere } from "../shared";
import Type from "./Type";
import {
    AiOutlineDownload,
} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";
import pdf from "../../Assets/../Assets/CV_ingenieur_robotique_vision.pdf";

function Home() {
    const { t } = useLanguage();

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row className="align-items-center">
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                {t("home.greeting")}{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    🤖
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                {t("home.iAm")}
                                <strong className="main-name"> SEBASTIEN FOURNIER</strong>
                            </h1>

                            <div className="home-type-wrap">
                                <Type />
                            </div>

                            <div className="home-buttons">
                                <Button
                                    className="home-contact-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                >
                                    <MdOutlineEmail style={{ marginBottom: "2px" }} />
                                    &nbsp;{t("home.contactBtn")}
                                </Button>

                                <Button
                                    variant="primary"
                                    href={pdf}
                                    target="_blank"
                                    className="home-download-btn"
                                >
                                    <AiOutlineDownload style={{ marginBottom: "2px" }} />
                                    &nbsp;{t("home.downloadCV")}
                                </Button>
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
                            <ParticleSphere />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
