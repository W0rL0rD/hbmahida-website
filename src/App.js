import React from "react";
import './App.css';

function App() {
  return (
    <container className="page">
      <div className="profile--box" />
      <div className="content--box">
        <h1 className="name"> Hetarth Mahida</h1>
        <h2 className="field"> Computer Science Major</h2>
        <h3 className="university"> University of Waterloo</h3>
        <a href="mailto:hbmahida@uwaterloo.ca" className="email">
        ✉️ CONTACT ME
        </a>
        <container className="content-container">
          <h1 className="About--Title">About</h1>
          <p className="About--Content">
            I am an inquisitive student and an aspiring developer who is a quick study at webdev.
            I love webdev and automating minor tasks. I believe that I have a novel way of visualizing problems and implementing various technologies.
          </p>
          <h1 className="Interests--Title">Interests</h1>
          <p className="Interests--Content">
            String instruments. Anime. Badminton. Food. Pop culture. Science fiction novels. Human Psychology Enthusiast. Video Games. Esports.
          </p>
        </container>
      </div>
      <div className="links--box">
        <a href="https://www.instagram.com/hb_mahida/">
          <img src={require("./Instagram-logo.png")} className="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/hetarth-mahida-43192225b">
          <img src={require("./LinkedIn-logo.webp")} className="linkedin" />
        </a>
        <a href="https://github.com/W0rL0rD">
          <img src={require("./GitHub-logo.png")} className="github" />
        </a>
      </div>
    </container>
    
  );
}

export default App;
