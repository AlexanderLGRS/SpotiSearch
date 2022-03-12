import React, { useState } from "react";
import './Styles/DetailSongCard.css'

export default function DetailSongCard(props) {
    const { cover, title, artist, albumType, releaseDate, audio, visibility } = props
    const hideCardHandler = () => {
        props.onHideHandler()
    }
    return (
        <>
            <div className={`${visibility} detailCard`}>
                <span onClick={hideCardHandler}>
                    <ion-icon className="closeButton" size="large" name="close-circle-outline"></ion-icon>
                </span>
                <img className="detailCard--cover" src={cover} alt={`${title} cover`} />
                <div className="detailCard--title">{title}</div>
                <div className="detailCard--albumType">{albumType}</div>
                <div className="detailCard--releaseDate">{releaseDate}</div>
                <div className="detailCard--artist">{artist}</div>
                <iframe scrolling="no" src={`${audio}?cid=null`} allow="encrypted-media"></iframe>
            </div>
        </>
    )
}