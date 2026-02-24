import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useLanguage } from "../../context/LanguageContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// International format: optional + or 00 prefix, then digits and common separators (spaces, dots, dashes, parentheses)
const PHONE_FORMAT_REGEX = /^[\+]?[0-9\s.\-()]+$/;
const PHONE_DIGITS_MIN = 10;
const PHONE_DIGITS_MAX = 15; // E.164
const CONTACT_EMAIL = "seb.fournier.tech@proton.me";

function validateEmail(value) {
    if (!value.trim()) return false;
    return EMAIL_REGEX.test(value.trim());
}

function validatePhone(value) {
    const trimmed = value.trim();
    if (!trimmed) return true;
    // Only allowed characters (international format)
    if (!PHONE_FORMAT_REGEX.test(trimmed)) return false;
    const digitsOnly = trimmed.replace(/\D/g, "");
    const len = digitsOnly.length;
    return len >= PHONE_DIGITS_MIN && len <= PHONE_DIGITS_MAX;
}

function FindMeOn() {
    const { t } = useLanguage();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ email: null, phone: null });
    const [emailCopied, setEmailCopied] = useState(false);
    const emailCopyWrapRef = useRef(null);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(CONTACT_EMAIL).then(
            () => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
            },
            () => {}
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValid = validateEmail(email);
        const phoneValid = validatePhone(phone);
        setErrors({
            email: emailValid ? null : "email",
            phone: phoneValid ? null : "phone",
        });
        if (!emailValid || !phoneValid) return;

        const subject = encodeURIComponent("Contact portfolio");
        const nameLine = [firstName, lastName].filter(Boolean).join(" ");
        const bodyParts = [
            nameLine ? `De : ${nameLine}` : null,
            message,
            phone ? `Téléphone : ${phone}` : null,
        ].filter(Boolean);
        const body = encodeURIComponent(bodyParts.join("\n\n"));
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const clearError = (field) => {
        setErrors((prev) => ({ ...prev, [field]: null }));
    };

    const handleEmailCopyWrapLeave = () => {
        if (emailCopyWrapRef.current?.contains(document.activeElement)) {
            document.activeElement.blur();
        }
    };

    return (
        <Container fluid className="contact-section">
            <Container>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 className="project-heading">{t("findMeOn.title")}</h1>

                        <Card className="contact-form-card">
                            <Card.Body>
                                <Row className="g-4 align-items-start">
                                    <Col md={5} className="contact-form-card-intro-col">
                                        <p className="contact-form-card-intro">{t("findMeOn.cardIntro")}</p>
                                    </Col>
                                    <Col md={7}>
                                        <Form onSubmit={handleSubmit}>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="contact-firstName">
                                                <Form.Label>{t("findMeOn.formFirstName")}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder={t("findMeOn.formFirstNamePlaceholder")}
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="contact-lastName">
                                                <Form.Label>{t("findMeOn.formLastName")}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder={t("findMeOn.formLastNamePlaceholder")}
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="contact-email">
                                                <Form.Label>{t("findMeOn.formEmail")}</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder={t("findMeOn.formEmailPlaceholder")}
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        clearError("email");
                                                    }}
                                                    isInvalid={!!errors.email}
                                                    required
                                                />
                                                {errors.email && (
                                                    <Form.Control.Feedback type="invalid">
                                                        {t("findMeOn.formErrorEmailInvalid")}
                                                    </Form.Control.Feedback>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="contact-phone">
                                                <Form.Label>{t("findMeOn.formPhone")}</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    placeholder={t("findMeOn.formPhonePlaceholder")}
                                                    value={phone}
                                                    onChange={(e) => {
                                                        setPhone(e.target.value);
                                                        clearError("phone");
                                                    }}
                                                    isInvalid={!!errors.phone}
                                                />
                                                {errors.phone && (
                                                    <Form.Control.Feedback type="invalid">
                                                        {t("findMeOn.formErrorPhoneInvalid")}
                                                    </Form.Control.Feedback>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-4" controlId="contact-message">
                                        <Form.Label>{t("findMeOn.formMessageLabel")}</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            placeholder={t("findMeOn.formMessagePlaceholder")}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Button type="submit" variant="primary" className="contact-form-send-btn">
                                        <HiOutlinePaperAirplane className="contact-form-send-icon" aria-hidden />
                                        {t("findMeOn.formSend")}
                                    </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <ul className="home-about-social-links">
                            <li
                                ref={emailCopyWrapRef}
                                className="social-icons contact-email-copy-wrap"
                                onMouseLeave={handleEmailCopyWrapLeave}
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
