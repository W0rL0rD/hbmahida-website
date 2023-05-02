import React from "react";

function MainContent() {
  return (
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
  )
}
export default MainContent;