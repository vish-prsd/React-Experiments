import React from "react";
import "../styles/Certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications
      </h2>
      <div className="certificate-whole">

        <div className="certificate-grid">
          <div className="certificate-logo">
            <img className="image" src="/react.jpeg" alt="" />
          </div>
          <div className="certificate-details">
            <h2 className="certificate-name">React Basics</h2>
            <p>Provider: <b>META</b> in collaboration with coursera.</p>
            <p><u>Skills Gained</u></p>
            <div className="certificate-skills-grid">
              <p>React(Web FrameWork)</p>
              <p>Application development</p>
              <p>Web Application</p>
              <p>Front-End Web Development</p>
            </div>
            <a href="https://www.coursera.org/account/accomplishments/verify/ATS52CAMUCRJ">View Certificate</a>
          </div>
        </div>

        <div className="certificate-grid">
          <div className="certificate-logo">
            <img className="image" src="/javascript.jpeg" alt="" />
          </div>
          <div className="certificate-details">
            <h2 className="certificate-name">Programming with Javascript</h2>
            <p>Provider: <b>META</b> in collaboration with coursera.</p>
            <p><u>Skills Gained</u></p>
            <div className="certificate-skills-grid">
              <p>Test-Driven Development</p>
              <p>Object-Oriented Programming (OOP)</p>
              <p>JavaScript</p>
              <p>Front-End Web Development</p>
            </div>
            <a href="https://coursera.org/share/6e3855a01ff95e00be26b03512b7d7aa">View Certificate</a>
          </div>
        </div>

        <div className="certificate-grid">
          <div className="certificate-logo">
            <img className="image" src="/git.jpeg" alt="" />
          </div>
          <div className="certificate-details">
            <h2 className="certificate-name">Version Control Git</h2>
            <p>Provider: <b>META</b> in collaboration with coursera.</p>
            <p><u>Skills Gained</u></p>
            <div className="certificate-skills-grid">
              <p>Version <br />Control</p>
              <p>Github</p>
              <p>Bash <br />(Unix Shell)</p>
              <p>Linux</p>
            </div>
            <a href="https://coursera.org/share/fb70c1a62498fbd8e0ab679288718741">View Certificate</a>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Certifications;
