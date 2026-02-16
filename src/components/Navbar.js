import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { AiOutlineUser, AiOutlineMail, AiFillGithub, AiOutlineCode, AiOutlineHistory, AiOutlineFolderOpen, AiOutlineRead } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../Context/LanguageContext";
import logo from "../Assets/home_logo.png";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Smoothly scrolls the viewport to the element matching `sectionId`.
 * Prevents the default anchor-link jump so the transition stays fluid.
 */
function scrollToSection(e, sectionId) {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Shared inline style applied to every nav-link icon for vertical alignment. */
const iconStyle = { marginBottom: "2px" };

/* ------------------------------------------------------------------ */
/*  Flag SVGs                                                          */
/*  Both use a 30 × 20 viewBox and render at 24 × 16 px so they       */
/*  appear identical in size inside the language toggle button.        */
/* ------------------------------------------------------------------ */

/** Union Jack — layered diagonals + cross, clipped to the viewBox. */
const UKFlag = ({ className }) => (
    <svg className={className} viewBox="0 0 30 20" width="24" height="16" aria-label="English">
        <clipPath id="gb"><rect width="30" height="20" /></clipPath>
        <g clipPath="url(#gb)">
            <rect width="30" height="20" fill="#012169" />
            {/* White saltire (diagonal cross) */}
            <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="4" />
            {/* Red saltire */}
            <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2.5" />
            {/* White cross of St George */}
            <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="6.5" />
            {/* Red cross of St George */}
            <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="4" />
        </g>
    </svg>
);

/** French Tricolore — three equal vertical bands: blue, white, red. */
const FRFlag = ({ className }) => (
    <svg className={className} viewBox="0 0 30 20" width="24" height="16" aria-label="Français">
        <rect width="10" height="20" fill="#002395" />
        <rect x="10" width="10" height="20" fill="#fff" />
        <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
);

/* ------------------------------------------------------------------ */
/*  Nav links configuration                                            */
/*  Each entry maps to a Nav.Item rendered via .map() in the navbar.   */
/*  To add a new section, append an object with { id, label, Icon }.   */
/* ------------------------------------------------------------------ */

const navLinks = [
    { id: "about",       labelKey: "navbar.about",       Icon: AiOutlineUser },
    { id: "skills",      labelKey: "navbar.skills",     Icon: AiOutlineCode },
    { id: "experiences", labelKey: "navbar.experiences", Icon: AiOutlineHistory },
    { id: "project",     labelKey: "navbar.projects",   Icon: AiOutlineFolderOpen },
    { id: "education",   labelKey: "navbar.education",   Icon: AiOutlineRead },
    { id: "contact",     labelKey: "navbar.contact",    Icon: AiOutlineMail },
];

/* ------------------------------------------------------------------ */
/*  NavBar Component                                                   */
/* ------------------------------------------------------------------ */

function NavBar() {
    /** Whether the mobile hamburger menu is open. */
    const [expand, updateExpanded] = useState(false);

    /** True once the user scrolls past the threshold — triggers the sticky glass style. */
    const [navColour, updateNavbar] = useState(false);

    /** Current language ("en" | "fr"), toggle callback, and t() translator from context. */
    const { language, toggleLanguage, t } = useLanguage();

    const scrollHandler = useCallback(() => {
        updateNavbar(window.scrollY >= 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, { passive: true });
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    /**
     * Returns the appropriate CSS class for a flag SVG based on
     * whether `lang` matches the currently active language.
     */
    const flagClass = (lang) =>
        `lang-flag ${language === lang ? "lang-active" : "lang-inactive"}`;

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            {/* Frosted-glass background — made visible by the "sticky" class */}
            <div className="navbar-glass-overlay" />

            <Container>
                {/* Brand / logo — scrolls back to the hero section */}
                <Navbar.Brand href="#home" className="d-flex" onClick={(e) => scrollToSection(e, "home")}>
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>

                {/* Hamburger toggler (visible on mobile only) — three bars that animate into an X */}
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => updateExpanded(expand ? false : "expanded")}
                >
                    <span /><span /><span />
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        {/* Section links — generated from the navLinks config array */}
                        {navLinks.map(({ id, labelKey, Icon }) => (
                            <Nav.Item key={id}>
                                <Nav.Link
                                    href={`#${id}`}
                                    onClick={(e) => { scrollToSection(e, id); updateExpanded(false); }}
                                >
                                    <span className="nav-link-content">
                                        <Icon style={iconStyle} /> {t(labelKey)}
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}

                        {/* Language toggle — switches between EN and FR */}
                        <Nav.Item>
                            <Button className="lang-toggle-btn" onClick={toggleLanguage}>
                                {/* Decorative corner-bracket frame (styled via CSS) */}
                                <span className="lang-toggle-corners" />
                                <FRFlag className={flagClass("fr")} />
                                <span className="lang-separator">/</span>
                                <UKFlag className={flagClass("en")} />
                            </Button>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* Social icons — pinned to the far right edge of the navbar */}
            <div className="navbar-social-icons">
                <a
                    href="https://www.linkedin.com/in/sebastien-fournier-software-robotics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-social-link"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/sebastien-fournier-software-robotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-social-link"
                    aria-label="GitHub"
                >
                    <AiFillGithub />
                </a>
            </div>
        </Navbar>
    );
}

export default NavBar;
