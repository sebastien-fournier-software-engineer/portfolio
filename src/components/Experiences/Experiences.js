import React from "react";
import { Container } from "react-bootstrap";
import {
    AiOutlineCalendar,
    AiOutlineProject,
    AiOutlineCheckCircle,
    AiOutlineRocket,
    AiOutlineLineChart,
    AiOutlineClockCircle,
    AiOutlineEnvironment,
    AiOutlineDown,
} from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

import geHealthcare from "../../assets/Customers/ge-healthcare.png";
import echosensLogo from "../../assets/Customers/echosens.png";
import navyaLogo from "../../assets/Customers/navya.png";
import upTechnologiesLogo from "../../assets/Customers/up_technologies.png";
import stoerkTronicLogo from "../../assets/Customers/stoerk-tronic.png";
import strathclydeLogo from "../../assets/Customers/strathclyde.png";

const EXPERIENCE_LOCAL_LOGOS = {
    "ge-healthcare": geHealthcare,
    "echosens": echosensLogo,
    "navya": navyaLogo,
    "up-technologies": upTechnologiesLogo,
    "stoerk-tronic": stoerkTronicLogo,
    "strathclyde": strathclydeLogo,
};

/**
 * Computes the duration between startDate (YYYY-MM) and today.
 * Returns a formatted string according to language (e.g. "9 months", "2 years 3 months").
 */
function formatDurationFromStart(startDateStr, t) {
    const [year, month] = startDateStr.split("-").map(Number);
    const start = new Date(year, month - 1, 1);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1;
    months = Math.max(1, months);

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const fmt = (key) => t(`experiences.durationFormat.${key}`);

    if (years === 0) {
        return remainingMonths <= 1 ? `1 ${fmt("month")}` : `${remainingMonths} ${fmt("months")}`;
    }
    if (remainingMonths === 0) {
        return years === 1 ? `1 ${fmt("year")}` : `${years} ${fmt("years")}`;
    }
    const yPart = years === 1 ? `1 ${fmt("year")}` : `${years} ${fmt("years")}`;
    const mPart = remainingMonths === 1 ? `1 ${fmt("month")}` : `${remainingMonths} ${fmt("months")}`;
    return `${yPart} ${mPart}`;
}

const LIST_BLOCKS = [
    { labelKey: "missions", Icon: AiOutlineCheckCircle, dataKey: "missions" },
    { labelKey: "achievements", Icon: AiOutlineRocket, dataKey: "achievements" },
    { labelKey: "results", Icon: AiOutlineLineChart, dataKey: "results" },
];

function ExperienceBlockHeader({ labelKey, Icon }) {
    const { t } = useLanguage();
    const label = t(`experiences.labels.${labelKey}`);
    return (
        <div className="experiences-block-header">
            <span className="experiences-block-icon-wrap">
                <Icon className="experiences-block-icon" />
            </span>
            <span className="experiences-block-label">{label}</span>
        </div>
    );
}

/**
 * Wraps the first numeric value (before the "·" separator) in a span for results styling.
 * Handles numbers with thousands separator, percentages, units (h) and units with space (e.g. milli-second).
 */
function formatResultWithNumbers(text) {
    if (typeof text !== "string") return text;
    const splitPattern = /(\d+(?:\s\d{3})*(?:%|[a-zA-Z])?(?:\s+[\w-]+)?)(\s*·)/;
    const numberTest = /^\d+(?:\s\d{3})*(?:%|[a-zA-Z])?(?:\s+[\w-]+)?$/;
    const parts = text.split(splitPattern);
    let firstNumberFound = false;
    return parts.map((part, i) => {
        if (numberTest.test(part) && !firstNumberFound) {
            firstNumberFound = true;
            return <span key={i} className="experiences-result-number">{part}</span>;
        }
        return part;
    });
}

function ExperienceListBlock({ labelKey, Icon, items }) {
    if (!items || (Array.isArray(items) && items.length === 0)) return null;

    const list = Array.isArray(items) ? items : [items];
    const isResults = labelKey === "results";

    return (
        <div className={`experiences-block experiences-block--${labelKey}`}>
            <ExperienceBlockHeader labelKey={labelKey} Icon={Icon} />
            <ul className="experiences-block-list">
                {list.map((item, i) => (
                    <li key={i}>{isResults ? formatResultWithNumbers(item) : item}</li>
                ))}
            </ul>
        </div>
    );
}

function ExperienceProjectBlock({ project }) {
    if (!project) return null;

    return (
        <div className="experiences-block experiences-block--project">
            <ExperienceBlockHeader labelKey="project" Icon={AiOutlineProject} />
            <p className="experiences-block-text">{project}</p>
        </div>
    );
}

/**
 * Parse period string "start – end" or "start - end" into { start, end, separator }.
 * Falls back to full period if no separator found.
 */
function parsePeriod(period) {
    if (!period || typeof period !== "string") return { start: period, end: null, separator: null };
    const match = period.match(/^(.+?)\s+[–-]\s+(.+)$/);
    if (match) {
        return { start: match[1].trim(), end: match[2].trim(), separator: " – " };
    }
    return { start: period, end: null, separator: null };
}

function ExperiencePeriod({ period }) {
    const { start, end, separator } = parsePeriod(period);
    if (!start) return null;

    return (
        <div className="experiences-period">
            <span className="experiences-meta-icon-wrap">
                <AiOutlineCalendar className="experiences-meta-icon" />
            </span>
            <div className="experiences-period-content">
                <span className="experiences-period-start">{start}</span>
                {end && <span className="experiences-period-end">{separator}{end}</span>}
            </div>
        </div>
    );
}

function ExperienceSubProjectBlock({ subProject }) {
    if (!subProject) return null;

    return (
        <div className="experiences-subproject">
            <div className="experiences-subproject-title">{subProject.title}</div>
            {LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                <ExperienceListBlock
                    key={labelKey}
                    labelKey={labelKey}
                    Icon={Icon}
                    items={subProject[dataKey]}
                />
            ))}
            {subProject.tags?.length > 0 && (
                <div className="experiences-block experiences-block--tags">
                    <ExperienceBlockHeader labelKey="tags" Icon={FaTag} />
                    <div className="experiences-tags">
                        {subProject.tags.map((tag, i) => (
                            <span key={i} className="experiences-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function ExperienceCompanyLogo({ exp }) {
    const [imgFailed, setImgFailed] = React.useState(false);
    const logoUrl = exp.logoKey ? EXPERIENCE_LOCAL_LOGOS[exp.logoKey] : exp.logo;
    const showImg = logoUrl && !imgFailed;
    const initial = (exp.company || "?").charAt(0).toUpperCase();

    if (showImg) {
        const logoClass = exp.logoKey === "echosens"
            ? "experiences-company-logo experiences-company-logo--img experiences-company-logo--echosens"
            : "experiences-company-logo experiences-company-logo--img";
        return (
            <span className={logoClass}>
                <img
                    src={logoUrl}
                    alt=""
                    onError={() => setImgFailed(true)}
                />
            </span>
        );
    }
    return (
        <span className="experiences-company-logo experiences-company-logo--initial" aria-hidden="true">
            {initial}
        </span>
    );
}

function ExperienceCard({ exp, isExpanded, onToggle }) {
    const { t } = useLanguage();
    const duration = exp.isCurrent && exp.startDate
        ? formatDurationFromStart(exp.startDate, t)
        : exp.duration;

    const cardClass = [
        "experiences-card",
        "experiences-card--grid",
        exp.isCurrent && "experiences-card--ongoing",
        !isExpanded && "experiences-card--collapsed",
    ].filter(Boolean).join(" ");

    return (
        <div className={cardClass}>
            {/* Row 1: company | role — clickable to toggle */}
            <div
                className="experiences-grid-col1 experiences-grid-row1 experiences-card-header"
                onClick={onToggle}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? t("experiences.toggleCollapse") : t("experiences.toggleExpand")}
            >
                <div className="experiences-company">
                    <ExperienceCompanyLogo exp={exp} />
                    <span className="experiences-company-name">{exp.company}</span>
                </div>
            </div>
            <div
                className="experiences-grid-col2 experiences-grid-row1 experiences-card-header"
                onClick={onToggle}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); } }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? t("experiences.toggleCollapse") : t("experiences.toggleExpand")}
            >
                <div className="experiences-role">
                    {exp.role}
                    {exp.isCurrent && (
                        <span className="experiences-ongoing-badge">{t("experiences.ongoing")}</span>
                    )}
                    {exp.experienceType && (
                        <span className={`experiences-type-badge experiences-type-badge--${exp.experienceType}`}>
                            {t(`experiences.experienceTypeBadges.${exp.experienceType}`)}
                        </span>
                    )}
                </div>
                <span className="experiences-card-toggle-btn">
                    <AiOutlineDown className="experiences-card-chevron" aria-hidden="true" />
                </span>
            </div>

            {/* Row 2: animated detail (expand/collapse) */}
            <div className="experiences-card-detail">
                <div className="experiences-grid-col1 experiences-meta">
                    <ExperiencePeriod period={exp.period} />
                    {duration && (
                        <div className="experiences-meta-row">
                            <span className="experiences-meta-icon-wrap">
                                <AiOutlineClockCircle className="experiences-meta-icon" />
                            </span>
                            <span>{duration}</span>
                        </div>
                    )}
                    {exp.location && (
                        <div className="experiences-meta-row experiences-meta-row--location">
                            <span className="experiences-meta-icon-wrap">
                                <AiOutlineEnvironment className="experiences-meta-icon" />
                            </span>
                            <span>{exp.location}</span>
                        </div>
                    )}
                </div>
                <div className="experiences-grid-col2 experiences-content">
                <ExperienceProjectBlock project={exp.project} />

                {exp.projects ? (
                    exp.projects.map((subProject, idx) => (
                        <ExperienceSubProjectBlock key={idx} subProject={subProject} />
                    ))
                ) : (
                    LIST_BLOCKS.map(({ labelKey, Icon, dataKey }) => (
                        <ExperienceListBlock
                            key={labelKey}
                            labelKey={labelKey}
                            Icon={Icon}
                            items={exp[dataKey]}
                        />
                    ))
                )}

                {exp.tags?.length > 0 && (
                    <div className="experiences-block experiences-block--tags">
                        <ExperienceBlockHeader labelKey="tags" Icon={FaTag} />
                        <div className="experiences-tags">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="experiences-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

function ExperienceTimelineItem({ exp, index, isExpanded, onToggle }) {
    return (
        <div className={`experiences-timeline-item${exp.isCurrent ? " experiences-timeline-item--ongoing" : ""}`}>
            <div className="experiences-timeline-node">
                <span className="experiences-timeline-node-dot" />
            </div>
            <div className="experiences-timeline-connector" aria-hidden="true" />
            <ExperienceCard exp={exp} isExpanded={isExpanded} onToggle={() => onToggle(index)} />
        </div>
    );
}

function Experiences() {
    const { t } = useLanguage();
    const entries = t("experiences.entries") || [];
    const [expandedCards, setExpandedCards] = React.useState(() => new Set([0]));

    const toggleCard = (index) => {
        setExpandedCards((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    return (
        <section id="experiences" className="experiences-section" style={{ minHeight: "50vh", padding: "80px 0" }}>
            <Container>
                <h1 className="project-heading">{t("experiences.title")}</h1>

                <div className="experiences-timeline">
                    <div className="experiences-timeline-track" aria-hidden="true" />
                    {entries.map((exp, index) => (
                        <ExperienceTimelineItem
                            key={index}
                            exp={exp}
                            index={index}
                            isExpanded={expandedCards.has(index)}
                            onToggle={toggleCard}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Experiences;
