import React from "react"
import Title from "../layout/Title"
import Project from "./Project"
import { Link } from "gatsby"
import portfolio from "./portfolio"

const Projects = ({ title, showLink, projects }) => {
  const renderContent = portfolio => {
    if (showLink) {
      return (
        <div id="portfolio-items">
          {projects.map(site => {
            return (
              <div key={site.varName}>
                <Project site={site} />
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div id="portfolio-items">
          <h3>Websites</h3>
          {portfolio.websites.map(site => {
            return (
              <div key={site.varName}>
                <Project site={site} />
              </div>
            )
          })}
          <h3>Web Applications</h3>
          {portfolio.webApps.map(site => {
            return (
              <div key={site.varName}>
                <Project site={site} />
              </div>
            )
          })}
        </div>
      )
    }
  }

  return (
    <section className="section projects">
      <Title
        title={title}
        tagLine="Click on any image to see deployed project."
      />

      <div className="container-fluid">
        <div className="container">
          {renderContent(portfolio)}
          {showLink ? (
            <Link to="/projects" className="btn center-btn">
              More Projects
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
