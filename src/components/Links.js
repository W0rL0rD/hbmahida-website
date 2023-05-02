import React from "react";

function Links() {
  return (
    <div className="links--box">
        <a href="https://www.instagram.com/hb_mahida/">
          <img src={require("./Images/Instagram-logo.png")} className="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/hetarth-mahida-43192225b">
          <img src={require("./Images/LinkedIn-logo.webp")} className="linkedin" />
        </a>
        <a href="https://github.com/W0rL0rD">
          <img src={require("./Images/GitHub-logo.png")} className="github" />
        </a>
      </div>
  )
}

export default Links;