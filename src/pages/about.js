import React from "react"
import Seo from "../components/layout/Seo"
import Jobs from "../components/about/Jobs"
import Projects from "../components/projects/Projects"
import AboutMe from "../components/about/AboutMe"
import Education from "../components/about/Education"
import projects from "../constants/projects"
import Certificates from "../components/about/Certificates"

const About = () => {
  const featuredProjects = projects.filter(project => project.featured === true)
  return (
    <>
      <Seo title="About" />
      <main className="bg-gradient-bi">
        <AboutMe />
        <Jobs />
        <Education />
        <Certificates />
        <Projects
          title="Featured Projects"
          showLink={true}
          projects={featuredProjects}
        />
      </main>
    </>
  )
}

export default About
