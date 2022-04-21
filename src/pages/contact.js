import React from "react"
import Seo from "../components/layout/Seo"
import ContactForm from "../components/contact/ContactForm"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page bg-gradient">
        <article className="contact-form">
          <ContactForm />
        </article>
      </section>
    </>
  )
}

export default contact
