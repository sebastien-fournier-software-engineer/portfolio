import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { t } = useLanguage();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.intro")}
            <br />
            {t("aboutCard.job")}
            <br />
            <br />
            {t("aboutCard.activities")}
          </p>

          <ul>
            {t("aboutCard.activityList").map((activity, idx) => (
              <li key={idx} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "#888888", fontStyle: "italic" }}>
            {t("aboutCard.quote")}{" "}
          </p>
          <footer className="blockquote-footer">Sébastien</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
