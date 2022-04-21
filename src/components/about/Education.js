import React from "react"
import Title from "../layout/Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import education from "../../constants/education"

const Education = () => {
  const [edIndex, setEdIndex] = React.useState(0)

  const { school, degree, description, dateString } = education[edIndex]

  return (
    <section className="section jobs" style={{ paddingTop: "0rem" }}>
      <Title title="Education" />
      <div className="jobs-center">
        <div className="btn-container">
          {education.map((item, index) => {
            return (
              <button
                key={index}
                className={index === edIndex ? "job-btn active-btn" : "job-btn"}
                onClick={() => setEdIndex(index)}
              >
                {item.shortName}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{school}</h3>
          <h4>{degree}</h4>
          <p className="job-date">{dateString}</p>
          {description.map((item, index) => {
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

export default Education
