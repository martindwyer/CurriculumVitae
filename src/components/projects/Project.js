import React from "react"
import parse from "html-react-parser"
import TechStackModal from "./TechStackModal"

const Project = props => {
  const { title, description, image, siteUrl } = props.site

  return (
    <>
      <div className="row">
        <div className="col-lg-7" portfolio-image>
          <a href={siteUrl} target="_blank" rel="noreferrer" className="">
            <img
              className="d-block w-100 animate__animated animate__zoomInDown"
              src={image}
              alt="First slide"
            />
          </a>
        </div>
        <div className="col-lg-5 portfolio-comments">
          <div>
            <div className="accordion" id="accordion">
              <div className="card  mb-3 shadow">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link appTitle"
                      data-toggle=""
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      disabled
                      style={{ fontSize: "1.25rem", fontWeight: 800 }}
                    >
                      {title}
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="show"
                  aria-labelledby="headingOne"
                  data-parent=""
                >
                  <div className="card-body">{parse(description)}</div>

                  <TechStackModal props={props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <GatsbyImage
        image={projectGatsbyImageData}
        className="project-img"
        alt={project.name}
      />

      <div className="project-info">
        <span className="project-number">0{project.id}.</span>
        <a href={project.liveUrl} className="project-slug">
          <h3>{project.name}</h3>
        </a>

        <p className="project-desc">{project.projectDescription}</p>
        <div className="project-stack">
          Technology Stack: <br />
          {project.stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          View live site or the code on Github: <br />
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
        </div>
      </div> */}
    </>
  )
}

export default Project
