import React from 'react'
import ServiceItem from './ServiceItem'

const Services = () => {
    const items = [
        {
            icon: "fas fa-palette",
            image: "",
            title: "Web design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-code",
            image: "",
            title: "Web development",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "",
            image: "devices",
            title: "Responsive design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-file-code",
            image: "",
            title: "PSD to HTML",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "",
            image: "reset_tv",
            title: "Re-Design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "",
            image: "design_services",
            title: "Graphic design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
    ]
    return (
        <>
            <section className="bg-light py-5">
                <div className="container services">
                    <h2 className="title">What i do</h2>
                    <div className="row">
                        {items.map((item, i) => <ServiceItem key={i} icon={item.icon} image={item.image} title={item.title} desc={item.desc} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
