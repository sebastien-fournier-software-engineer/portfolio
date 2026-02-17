import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../Context/LanguageContext";

function Footer() {
    const { t } = useLanguage();
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={12} className="footer-copywright">
                    <h3>©{year} Sébastien Fournier | Portfolio | {t("footer.allRightsReserved")}</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
