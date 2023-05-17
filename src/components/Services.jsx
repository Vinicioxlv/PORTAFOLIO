import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Asesoría Empresarial",
      desc: "Asesoramiento en el proceso de implementación de sistemas CRM, ERP, CHAT BOTS.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Marketing Digital",
      desc: "Servicios de creación de contenido en redes sociales y campañas de anuncios en meta",
      icon: "fas fa-bullhorn",
    },
    {
      name: "Desarrollo web y móvil",
      desc: "Desarrollo software personalizado usando tecnologías modernas como React, node JS, Express, mongo db, Flutter, React Native.",
      icon: "fas fa-desktop",
    },
    {
      name: " Diseño UX / UI ",
      desc: "Estudios de experiencia de usuario y diseño de prototipos en FIGMA y Adobe XD.",
      icon: "fas fa-pencil-ruler",
    }
   
    
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Servicios
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
