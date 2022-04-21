import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/mdbytes",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/mdbytes",
  },
  {
    id: 3,

    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/martindwyer",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/mdbytes",
  },
]

export default data
