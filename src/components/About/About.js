import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FlipAvatar from "../FlipAvatar";
import CustomerCarousel from "../Home/CustomerCarousel";
import { useLanguage } from "../../Context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title">
              {t("about.title")}
            </h1>
            <p className="home-about-subtitle">
              {t("about.subtitle")}
            </p>
            <div className="home-about-body">
              {t("about.body")}
            </div>
            <div className="home-about-carousel-wrap">
              <CustomerCarousel />
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <FlipAvatar interval={5000} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
