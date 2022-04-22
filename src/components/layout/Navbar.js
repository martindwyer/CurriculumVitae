import React from "react"
import logo from "../../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../../constants/links"
import { Link } from "gatsby"
import { FaArrowCircleUp } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  const backToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <nav id="navbar" className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="web-dev" height="50" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url} onClick={toggleSidebar}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
      <div id="back-to-top">
        <button onClick={() => backToTop()}>
          <FaArrowCircleUp />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
