import React from 'react'
import Title from './Title'
import { tourLinks } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='Tours' />
      <div className="section-center featured-center">
        {tourLinks.map((link) => {
          const { id, src, date, title, text, local, time, price } = link
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src= {src} className="tour-img" alt=""/>
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {local}
                  </p>
                  <p>{time}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
