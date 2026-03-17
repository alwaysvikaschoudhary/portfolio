import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Cograd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and deployed full-stack event management modules using React.js 
              and Spring Boot. Refactored platforms using Service–Repository 
              architecture and integrated Gemini API for AI-driven features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>IIIT Una</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Focusing on Data Structures, Algorithms, and Full Stack Development.
              Maintaining consistent performance in competitive programming with 
              a strong focus on scalable system design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
