import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";

const CONTACT_EMAIL = "seb.fournier.tech@proton.me";
const PANEL_AUTO_CLOSE_MS = 5000;

function FindMeOn() {
    const { t } = useLanguage();
    const [emailCopied, setEmailCopied] = useState(false);
    const [panelVisible, setPanelVisible] = useState(false);
    const panelCloseTimerRef = useRef(null);

    useEffect(() => {
        if (!panelVisible) return;
        panelCloseTimerRef.current = setTimeout(() => setPanelVisible(false), PANEL_AUTO_CLOSE_MS);
        return () => {
            if (panelCloseTimerRef.current) clearTimeout(panelCloseTimerRef.current);
        };
    }, [panelVisible]);

    const handleCopyEmail = useCallback(() => {
        if (!panelVisible) {
            setPanelVisible(true);
            return;
        }
        navigator.clipboard.writeText(CONTACT_EMAIL).then(
            () => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 4500);
                if (panelCloseTimerRef.current) clearTimeout(panelCloseTimerRef.current);
                panelCloseTimerRef.current = setTimeout(() => setPanelVisible(false), PANEL_AUTO_CLOSE_MS);
            },
            () => {}
        );
    }, [panelVisible]);

    return (
        <Container fluid className="contact-section">
            <Container>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 className="project-heading">{t("findMeOn.title")}</h1>

                        <Card className="contact-form-card">
                            <Card.Body>
                                <div>
                                    <p className="contact-form-card-intro">{t("findMeOn.cardIntro")}</p>
                                    <Button
                                        as="a"
                                        href={t("findMeOn.calendlyUrl")}
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="primary"
                                        className="contact-form-send-btn"
                                    >
                                        <HiOutlinePaperAirplane className="contact-form-send-icon" aria-hidden />
                                        {t("findMeOn.calendlyCta")}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <ul className="home-about-social-links">
                            <li
                                className={`social-icons contact-email-copy-wrap${panelVisible ? " contact-email-copy-wrap--panel-open" : ""}`}
                            >
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="icon-colour home-social-icons contact-email-copy-btn"
                                    title={t("findMeOn.emailCopyHint")}
                                    aria-label={t("findMeOn.emailCopyHint")}
                                >
                                    <MdOutlineEmail />
                                </button>
                                <div
                                    className={`contact-email-copy-panel${emailCopied ? " contact-email-copy-panel--copied" : ""}`}
                                    role="tooltip"
                                    aria-live="polite"
                                >
                                    <span className="contact-email-address">{CONTACT_EMAIL}</span>
                                    <span className="contact-email-hint">
                                        {emailCopied ? t("findMeOn.emailCopied") : t("findMeOn.emailCopyHint")}
                                    </span>
                                </div>
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
