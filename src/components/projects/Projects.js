import React from "react"
import Title from "../layout/Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ title, projects, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} tagLine="Select recent development work." />

      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}

        {showLink ? (
          <Link to="/projects" className="btn center-btn">
            More Projects
          </Link>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

export default Projects
