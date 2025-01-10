import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-main-grid">

        <div className="education-grid">
          <div className="education-name">
            <h3>BACHELORS IN COMPUTER APPLICATION</h3>
          </div>
          <div className="education-info">
            <div className="education-logo">
              <img src="/stannesdegree.png" alt="" />
            </div>
            <div className="college-year-percentage">
                <p>St. Anne's Degree College, Virajpet.</p>

                <p>Passing year: 2023</p>
              
                <p>Percentage: 83%</p>
            </div>
          </div>
        </div>


        <div className="education-grid">
          <div className="education-name">
            <h3>PUC</h3>
          </div>
          <div className="education-info">
            <div className="education-logo">
              <img src="/stannesinstitution.jpg" alt="" />
            </div>
            <div className="college-year-percentage">
              <p>St. Anne's P U College, Virajpet.</p>

              <p>Passing year: 2020</p>

              <p>Percentage: 79%</p>
            </div>
          </div>
        </div>


        <div className="education-grid">
          <div className="education-name">
            <h3>SSLC</h3>
          </div>
          <div className="education-info">
            <div className="education-logo">
              <img src="/stannesdegree.png" alt="" />
            </div>
            <div className="college-year-percentage">
              <p>Sacred Heart's High School, Napoklu.</p>

              <p>Passing year: 2018</p>

              <p>Percentage: 86%</p>
            </div>
          </div>
        </div>

      </div>
   
    </section>
  );
}

export default Education;
