import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../context/LanguageContext";

function scrollToSection(e, sectionId) {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <div className="navbar-glass-overlay" />
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="d-flex"
                    onClick={(e) => scrollToSection(e, "home")}
                >
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                href="#about"
                                onClick={(e) => {
                                    scrollToSection(e, "about");
                                    updateExpanded(false);
                                }}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="#project"
                                onClick={(e) => {
                                    scrollToSection(e, "project");
                                    updateExpanded(false);
                                }}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="#resume"
                                onClick={(e) => {
                                    scrollToSection(e, "resume");
                                    updateExpanded(false);
                                }}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>


                        <Nav.Item>
                            <Button
                                className="lang-toggle-btn"
                                onClick={toggleLanguage}
                            >
                                <span className="lang-toggle-corners" />
                                <span className={language === "en" ? "lang-active" : "lang-inactive"} role="img" aria-label="English">🇬🇧</span>
                                {" / "}
                                <span className={language === "fr" ? "lang-active" : "lang-inactive"} role="img" aria-label="Français">🇫🇷</span>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
