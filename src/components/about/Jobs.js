import React from "react"
import Title from "../layout/Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import experience from "../../constants/experience"

const Jobs = () => {
  const [jobIndex, setJobIndex] = React.useState(0)

  const { company, position, positionDescription, dateString } =
    experience[jobIndex]

  return (
    <section className="section jobs" style={{ paddingBottom: "0rem" }}>
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  index === jobIndex ? "job-btn active-btn" : "job-btn"
                }
                onClick={() => setJobIndex(index)}
              >
                {item.shortName}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dateString}</p>
          {positionDescription.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
