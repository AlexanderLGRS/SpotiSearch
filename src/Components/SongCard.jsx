import React from "react";
import './Styles/SongCard.css'

let isExplicit = ''
export default function SongCard(props) {
    const { cover, title, artist, albumType, releaseDate, audio } = props

    const selectSongHandler = (data) => {
        const datos = {
            cover: cover,
            title: title,
            artist: artist,
            albumType: albumType,
            releaseDate: releaseDate,
            audio: audio + '?cid=null'
        }
        props.onSelectSong(datos)
    }

    return (
        <React.Fragment>
            <div className="songCard" onClick={selectSongHandler} >
                <img className="songCard--cover" src={cover} alt={`${title} cover`} />
                <div className="songCard--info">
                    <span className="card--info--title">{title}</span>
                    <span className="card--info--artist">{artist}</span>
                </div>
            </div>
        </React.Fragment>
    )
}