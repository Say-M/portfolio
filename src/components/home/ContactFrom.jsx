import React, { useState } from 'react'

const ContactFrom = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setContactData(prevData => Object.assign({ ...prevData }, { [name]: value }))
    }
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="col-md-6">
            <h3 className="text-capitalize mb-4">Get in touch</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name="name" type="text" className="form-control form-control-lg" value={contactData.name} placeholder="Your Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input name="email" type="text" className="form-control form-control-lg" value={contactData.email} placeholder="Your Email" onChange={handleChange} />
                    <small className="text-success" style={{ fontWeight: "500" }}>We will never share your email</small>
                </div>
                <div className="form-group">
                    <textarea name="message" style={{ resize: "none" }} className="form-control form-control-lg" value={contactData.message} rows="7" placeholder="Your Message" onChange={handleChange}></textarea>
                </div>
                <div className="from-group">
                    <button className="btn btn-success">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom
