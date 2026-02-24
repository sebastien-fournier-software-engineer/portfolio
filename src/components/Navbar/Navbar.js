import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { AiOutlineUser, AiOutlineMail, AiFillGithub, AiOutlineCode, AiOutlineHistory, AiOutlineFolderOpen, AiOutlineRead } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/home_logo.png";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Section IDs that may fit in the viewport; when they do, we center them on click. */
const SECTIONS_CENTER_IF_FIT = ["about", "education", "contact"];

/**
 * Smoothly scrolls the viewport to the section matching `sectionId`.
 * For about and education: if the section height fits in the viewport, scrolls so the section is vertically centered.
 * For contact: on desktop (≥768px) scrolls so FindMeOn + Footer are visible; if the block fits in viewport, centers it;
 *   if it overflows (e.g. 1024px), uses block "end" so the footer stays fully visible at the bottom of the screen.
 *   On mobile, scrolls to the top of the section.
 * For other sections, scrolls to the section title (h1) at a consistent height below the navbar.
 */
function scrollToSection(e, sectionId) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    const vh = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    const isMobile = window.innerWidth < 768;

    if (sectionId === "contact") {
        if (isMobile) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (sectionHeight <= vh) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            section.scrollIntoView({ behavior: "smooth", block: "end" });
        }
        return;
    }

    const shouldCenter = SECTIONS_CENTER_IF_FIT.includes(sectionId) && sectionHeight <= vh;
    if (shouldCenter) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    const title = section.querySelector(".project-heading, .home-about-title");
    const target = title || section;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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

    const navRef = useRef(null);

    /** Current language ("en" | "fr"), toggle callback, t() translator, and phase from context. */
    const { language, toggleLanguage, t, phase } = useLanguage();

    const scrollHandler = useCallback(() => {
        updateNavbar(window.scrollY >= 20);
        updateExpanded(false); /* close menu on scroll on mobile */
    }, []);

    const resizeHandler = useCallback(() => {
        if (window.innerWidth >= 1200) {
            updateExpanded(false); /* close when switching back to desktop (xl) */
        }
    }, []);

    const handleClickOutside = useCallback((e) => {
        if (expand && navRef.current && !navRef.current.contains(e.target)) {
            updateExpanded(false);
        }
    }, [expand]);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, { passive: true });
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [resizeHandler]);

    useEffect(() => {
        if (expand) {
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }
    }, [expand, handleClickOutside]);

    /**
     * Returns the appropriate CSS class for a flag SVG based on
     * whether `lang` matches the currently active language.
     */
    const flagClass = (lang) =>
        `lang-flag ${language === lang ? "lang-active" : "lang-inactive"}`;

    return (
        <div ref={navRef}>
        <Navbar
            expanded={expand}
            fixed="top"
            expand="xl"
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
                                    <span className={`nav-link-content lang-transition ${phase !== "idle" ? `lang-${phase}` : ""}`}>
                                        <Icon style={iconStyle} /> {t(labelKey)}
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}

                        {/* Language toggle — switches between EN and FR (no animation) */}
                        <Nav.Item>
                            <Button className="lang-toggle-btn" onClick={toggleLanguage}>
                                {/* Decorative corner-bracket frame (styled via CSS) */}
                                <span className="lang-toggle-corners" />
                                <FRFlag className={flagClass("fr")} />
                                <span className="lang-separator">/</span>
                                <UKFlag className={flagClass("en")} />
                            </Button>
                        </Nav.Item>

                        {/* Social icons — visible in mobile menu only (desktop: navbar-social-icons) */}
                        <div className="navbar-social-icons-mobile">
                            <a
                                href="https://www.linkedin.com/in/sebastien-fournier-software-robotics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar-social-link"
                                aria-label="LinkedIn"
                                onClick={() => updateExpanded(false)}
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/sebastien-fournier-software-robotics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar-social-link"
                                aria-label="GitHub"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiFillGithub />
                            </a>
                        </div>
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
        </div>
    );
}

export default NavBar;
