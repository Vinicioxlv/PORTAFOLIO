import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Landing Page Disponib",
      projectInfo:
        "Landign page de agencia de marketing digital y desarrollo de software con diseño responsive",
      client: "Ruby Clinton",
      technologies: "HTML5 y CSS3",
      industry: "Art & Design",
      date: "Nov 26, 2022",
      url: {
        name: "www.disponib.com",
        link: "https://vinicioxlv.github.io/LandignUcamp/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=9e1427ce-6236-4298-aa4d-d8d797ba0c92&submissionId=f0a8a6de-dba2-558a-027d-cbce0c25361b",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
        "images/projects/project-1.2.jpg",
        
      ],
      categories: [filters.BRAND],
    },
    {
      title: "App crud de tareas",
      projectInfo:
        "App crud de tareas usando javascript, manejo del DOM y local storage",
      client: "Ruby Clinton",
      technologies: "HTML5, CSS3, JAVASCRIPT",
      industry: "Art & Design",
      date: "8 de enero del 2023",
      url: {
        name: "www.apptareas.com",
        link: "https://vinicioxlv.github.io/crudActividades/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=084ca4e8-2330-4b80-98eb-f31bf0437fda&submissionId=6ff7aee6-bc4b-bb5b-bd85-711b8e11654e#",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
        "images/projects/project-2.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Tablero de datos",
      projectInfo:
        "Trabajo realizado en equipo se consumio la apinews usando fetch se mostraron en graficas los resultados usando la libreria chart.js ",
      client: "Ruby Clinton",
      technologies: "HTML5, CSS3, Javascript, Chart.js, consumo de API",
      industry: "Art & Design",
      date: "Febrero 13, 2023",
      url: {
        name: "www.dashboard.com",
        link: "https://team1proyecto3.github.io/Proyecto3team1/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3.2.jpg",
        
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Restaurante App",
      projectInfo:
        "App de reastautante desarrollanda en react, cuenta con una landign page con la descripcion del servicio y una seccion par reservar que se conencta oon Firebase ",
      client: "Ruby Clinton",
      technologies: "HTML5, CSS3, React, Firebase",
      industry: "Art & Design",
      date: "5 de Marzo del 2023",
      url: {
        name: "www.reastauranteapp.com",
        link: "https://visionary-bunny-976983.netlify.app/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=e6753f12-93f1-4ef5-b496-57684d62467d&submissionId=4957392f-be08-e39b-a83c-23245be27798",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
        "images/projects/project-4.2.jpg"
        
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Ecommerce Voreas",
      projectInfo:
        "Aplicacion de comercio electrónico full stack integre node js, mongodb, express, react. Tambien se uso la pasarela de pagos paypal",
      client: "Ruby Clinton",
      technologies: "React, node, express, mongodb, pasarela de pagos Paypal",
      industry: "Art & Design",
      date: "6 de Mayo del 2023",
      url: {
        name: "www.voreas.com",
        link: "https://store-front-virid.vercel.app/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=53559519-b7e6-4054-9038-f99157a739dd&submissionId=5275f500-021c-f286-e39e-b03ed856417f",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-5.2.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Challenge Connect",
      projectInfo:
        "Plataforma web que conecta personas con conocimientos en tecnología (desarrollo web, movil, ciencia de datos, video juegos) sin experiencia con empresas que requieran talento  por medio de retos reales personalizados",
      client: "Challenge Connect",
      technologies: "Bubble herramienta no code",
      industry: "Art & Design",
      date: "20 de Mayo del 2023",
      url: {
        name: "www.challengeconnect.com",
        link: "https://connect-challengue.bubbleapps.io/version-test?debug_mode=true",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-6.2.jpg",
              ],
      categories: [filters.DESIGN],
    },
   
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
             Mi trabajo
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
