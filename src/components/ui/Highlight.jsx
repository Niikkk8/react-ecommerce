import React from "react";

const Highlight = ({icon, title, para}) => {
    return (
        <div className="highlight">
            <div className="highlight_img">{icon}</div>
            <h3 className="highlight_subtitle">{title}</h3>
            <p className="highlight_para">{para}</p>
        </div>
    )
}

export default Highlight;