import React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />

      <main className="error-page bg-gradient">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
