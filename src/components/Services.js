import React from 'react';
import Title from "./Title";
import { services as servicesData } from '../data'; // Renomeando o array importado

const Services = () => { // Renomeando a função de componente
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services'></Title>
   
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon"><i className={icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
