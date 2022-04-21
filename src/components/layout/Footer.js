import React from "react"
import socialLinks from "../../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          &copy;{new Date().getFullYear()}
          &nbsp;<span>Martin Dwyer</span>,&nbsp; all rights reserved.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
