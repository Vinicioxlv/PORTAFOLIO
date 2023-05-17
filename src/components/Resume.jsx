import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2012 - 2017",
      title: "Ingenieria en sistemas administrativos",
      place: "Universidad de Guayaquil",
      desc: "Carrera híbrida entre administración de empresas, marketing, finanzas y desarrollo de software",
    },
    {
      yearRange: "2018 - 2019",
      title: "Scrum Master",
      place: "Telefónica Educación Digital",
      desc: "Gestíon de proyectos tecnológicos aplicando metodologías ágiles",
    },
    {
      yearRange: "2022 - 2023",
      title: "Desarrollo web full stack",
      place: "UTEL - UCAMP",
      desc: "Bootcamp de desarrollo web usando html5, css, javasript, react, node js, express y mongodb",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2010 - 2013",
      title: "Analista de compras públicas",
      place: "SUMEQUIPVEGA",
      desc: "Elaborar los pliegos de contratación en el sistema USHAY y llevar un seguimiento en el SERCOP",
    },
    {
      yearRange: "2014 - 2022",
      title: "Jefe de Sucursal",
      place: "SUMEQUIPVEGA",
      desc: "Elaborar el plan estrategico, definir y dar seguimiento a los objetivos de ventas, logisticos, cobranzas ",
    },
    {
      yearRange: "2022 - Actualidad",
      title: "CEO",
      place: "DISPONIB",
      desc: "Director de Disponib agencia de marketing Digital y desarrollo de software",
    },
  ];

  const skills = [
    {
      name: "Finanzas",
      percent: 90,
    },
    {
      name: "Marketing digital",
      percent: 90,
    },
    
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "Python",
      percent: 60,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Node JS",
      percent: 70,
    },
    {
      name: "Node JS - Express",
      percent: 70,
    },
    {
      name: "Mongo db",
      percent: 70,
    },
    {
      name: "Wordpress",
      percent: 80,
    },
    
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Educación
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Experiencia
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Mis habilidades
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
