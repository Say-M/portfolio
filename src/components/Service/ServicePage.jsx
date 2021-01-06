import React from 'react'
import ServiceItem from '../home/ServiceItem'

const ServicePage = () => {
    const items = [
        {
            icon: "fas fa-palette",
            title: "Web design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-code",
            title: "Web development",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-palette",
            title: "Responsive design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-file-code",
            title: "PSD to HTML",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-sync-alt",
            title: "Re-Design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
        {
            icon: "fas fa-palette",
            title: "Graphic design",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto temporibus",
        },
    ]
    return (
        <>
            <section className="bg-light py-5">
                <div className="container services">
                    <h1 className="title">What i do</h1>
                    <div className="row">
                        {items.map(item => <ServiceItem icon={item.icon} title={item.title} desc={item.desc} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage
