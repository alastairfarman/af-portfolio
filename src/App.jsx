import React from "react";

function App() {
  return (
    <>
      <section id="HUD">
        <div>
          <ul>
            <li>START</li>
            <li>SKILLS</li>
            <li>EXPERIENCE</li>
            <li>WORK</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </section>
      <section className="section" id="summary">
        <h1>
          I have more than a decade of experience in e-commerce studio
          photography and post-production, alongside self-taught skills in web
          development, scripts, 3D and photogrammetry.
        </h1>
        <p>Some added blurb here? Does this look good?</p>
      </section>
      <section className="section" id="skills">
        <h2>Skills and Software</h2>
        <div className="table">
          <h3>Adobe Creative Suite</h3>
          <p>Photoshop, sgsoegn segoseg k isfej oseg xsv pojsev </p>
          <h3>Javascript</h3>
          <p>oinj poihs segiohas vad ifbn s</p>
          <p>React.js</p>
          <p>CaptureOne</p>
          <p>Blender</p>
        </div>
      </section>
      <section className="section" id="experience">
        <h2>Experience</h2>
        <h3>Photographer</h3>
        <p>Photography lead </p>
      </section>
      <section className="section" id="work">
        <div className="grid">
          Insert a mosaic grid of work components with new modal thing here
        </div>
      </section>
      <section className="section" id="contact"></section>
    </>
  );
}

export default App;
