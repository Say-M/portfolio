import React from 'react'
import ContactFrom from '../home/ContactFrom'
import ContactInfo from '../home/ContactInfo'

const ContactPage = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container contact">
                    <h1 className="title">Contact with me</h1>
                    <div className="row">
                        <ContactInfo />
                        <ContactFrom />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage
