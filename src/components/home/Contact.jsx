import React from 'react'
import ContactFrom from './ContactFrom'
import ContactInfo from './ContactInfo'

const Contact = () => {
    return (
        <>
            <section className="py-5">
                <div className="container contact">
                    <h2 className="title">Contact with me</h2>
                    <div className="row">
                        <ContactInfo />
                        <ContactFrom />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
