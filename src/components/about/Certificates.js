import React from "react"
import Title from "../layout/Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import certificates from "../../constants/certificates-v2"

const Certificates = () => {
  const [certIndex, setCertIndex] = React.useState(0)

  const { forHeading, certs } = certificates[certIndex]

  console.log("certs", certificates)

  return (
    <section
      className="section jobs certifications"
      style={{ paddingTop: "0rem" }}
    >
      <Title title="Certifications" />
      <div className="jobs-center">
        <div className="btn-container">
          {certificates.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  index === certIndex ? "job-btn active-btn" : "job-btn"
                }
                onClick={() => setCertIndex(index)}
              >
                {item.awardedFor}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{forHeading}</h3>

          {certs.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>
                  {item.name},&nbsp;by&nbsp;
                  <a href={item.providerUrl}>{item.awardedBy}</a>&nbsp;in&nbsp;
                  {item.dateString} (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    view
                  </a>
                  )
                </p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Certificates
