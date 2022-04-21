import React from "react"

const Title = ({ title, tagLine }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
      <p>{tagLine}</p>
    </div>
  )
}

export default Title
