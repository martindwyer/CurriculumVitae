import React from "react"
import Hero from "../components/Hero"
import Seo from "../components/layout/Seo"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <main className="bg-gradient">
        <Hero />
      </main>
    </>
  )
}

export default IndexPage
