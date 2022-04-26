import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import heroImg from "../assets/images/profile-pic.png"
import heroImgSmall from "../assets/images/profile-pic-small.png"
import nameLogo from "../assets/images/name-logo-black.png"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <img
            src={heroImgSmall}
            alt="martin dwyer"
            className="hero-img-small"
          />
          <div>
            <div className="underline"></div>
            <h3>Martin Dwyer</h3>

            <div>
              <h4>Founder and CEO</h4>
              <a href="https://mdbytes.com" target="_blank" rel="noreferrer">
                <img src={nameLogo} alt="md web tech" height="36" />
              </a>
            </div>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <img
          src={heroImg}
          alt="portfolio"
          className="hero-img-svg animate__animated animate__fadeIn"
        />
      </section>
    </header>
  )
}

export default Hero
