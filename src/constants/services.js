import React from "react"
import { FaSketch, FaAndroid } from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
const services = [
  {
    id: 1,
    icon: <BsPeopleFill className="service-icon" />,
    title: "Leadership",
    text: `Proven leader of teams and individuals, with over two decades experience with groups ranging from one-one training to 150 people.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Technology",
    text: `Broad education and experience with technology including network installation and service, database management, and software engineering.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Software Development",
    text: `Extensive experience with modern tools for developing and maintaining high-performance websites and web applications.`,
  },
]

export default services
