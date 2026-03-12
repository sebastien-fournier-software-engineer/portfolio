import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
    const { t } = useLanguage();
    const strings = useMemo(() => t("typewriter.strings") || [], [t]);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!Array.isArray(strings) || strings.length === 0) {
            return undefined;
        }

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % strings.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [strings]);

    if (!Array.isArray(strings) || strings.length === 0) {
        return null;
    }

    return (
        <div className="home-roles-rotator" aria-live="polite">
            <span
                key={activeIndex}
                className="home-roles-rotator-text"
            >
                {strings[activeIndex]}
            </span>
        </div>
    );
}

export default Type;
