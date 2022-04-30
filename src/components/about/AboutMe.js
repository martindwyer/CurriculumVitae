import React from "react"
import Title from "../layout/Title"
import services from "../../constants/services"
import about from "../../constants/about"

const AboutMe = () => {
  const { headline } = about[0]
  return (
    <section className="section">
      <Title title="Martin Dwyer" tagLine={headline} />
      <div
        className="personal-info"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      ></div>

      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutMe
