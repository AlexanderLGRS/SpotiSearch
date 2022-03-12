import React from "react";
import './Styles/SongCard.css'

export default function SongCard(props) {
    const { title, cover, artist } = props
    return (
        <React.Fragment>
            <div className="song--card">
                <img className="song--card--cover" src={cover} alt={title} />
                <div className="song--card--info">
                    <span className="card--info--title">{title}</span>
                    <span className="card--info--artist">{artist}</span>
                </div>
            </div>
        </React.Fragment>
    )
}