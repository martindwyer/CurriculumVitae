import React from "react"
import Projects from "../components/projects/Projects"
import Seo from "../components/layout/Seo"
import projects from "../constants/projects"
const ProjectsPage = () => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page bg-gradient-bi">
          <Projects title="Portfolio" projects={projects} showLink={false} />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
