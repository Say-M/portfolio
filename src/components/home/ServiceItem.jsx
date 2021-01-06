import React, { useState } from 'react'

const ServiceItem = ({ icon, image, title, desc }) => {
    const [isHover, setHover] = useState("323232")

    const handleHover = () => {
        setHover("00bc8c")
    }
    const handleHoverLeave = () => {
        setHover("323232")
    }

    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="item rounded" onMouseOver={handleHover} onMouseLeave={handleHoverLeave}>
                    <div className="icon">{icon ? <i className={icon}></i> : <img src={`//s.svgbox.net/materialui.svg?fill=${isHover}#${image}`} alt={title} />}</div>
                    <h3 className="text-success">{title}</h3>
                    <p className="text-muted">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceItem
