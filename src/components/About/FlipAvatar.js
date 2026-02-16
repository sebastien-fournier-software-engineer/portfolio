import React, { useState, useEffect } from "react";
import avatarImg from "../../Assets/avatar.svg";
import profileImg from "../../Assets/profile_picture.jpg";

function FlipAvatar({ interval = 5000 }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipped((prev) => !prev);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="flip-avatar-container"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div className={`flip-avatar-inner ${flipped ? "flipped" : ""}`}>
        {/* Front face – SVG avatar */}
        <div className="flip-avatar-face flip-avatar-front">
          <img src={avatarImg} className="img-fluid" alt="avatar" />
        </div>

        {/* Back face – profile photo */}
        <div className="flip-avatar-face flip-avatar-back">
          <img src={profileImg} className="img-fluid" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default FlipAvatar;
