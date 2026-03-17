import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Vita Flow",
    category: "Health & Donation Tracking Platform",
    tools: "Flutter, Spring Boot, PostgreSQL, Google Maps",
    image: "/images/vitaflow.png",
    link: "https://github.com/alwaysvikaschoudhary/Vita_Flow",
  },
  {
    title: "Smart Contact Manager",
    category: "Secure Contact Management System",
    tools: "Java, Spring Boot, Spring Security, MySQL",
    image: "/images/scm.png",
    link: "https://github.com/alwaysvikaschoudhary/Smart-Contact-Manager",
  },
  {
    title: "Food Delivery App",
    category: "Online Food Ordering System",
    tools: "Java, Spring Boot, Spring Security, MySQL",
    image: "/images/foodapp.png",
    link: "https://github.com/alwaysvikaschoudhary/Food-Delivery-App",
  },
  {
    title: "Algorithm Visualizer",
    category: "Data Structures & Algorithms Visualizer",
    tools: "HTML, CSS, JavaScript",
    image: "/images/algo.png",
    link: "https://github.com/alwaysvikaschoudhary/Algorithm-Visualizer",
  },
  {
    title: "Bus Reservation",
    category: "Bus Booking Frontend Application",
    tools: "Flutter, Dart",
    image: "/images/bus.png",
    link: "https://github.com/alwaysvikaschoudhary/BUS_RESERVATION_FRONTEND",
  },
  {
    title: "MVC Registration",
    category: "MVC-based User Management App",
    tools: "Servlet, JSP, JDBC, MySQL",
    image: "/images/mvc.png",
    link: "https://github.com/alwaysvikaschoudhary/MVC-Registration-App",
  },
];


const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            data-cursor="disable"
                          >
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
