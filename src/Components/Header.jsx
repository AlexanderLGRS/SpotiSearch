import React from "react";
import './Styles/Header.css';

export default function Header() {
    return (
        <React.Fragment>
            <nav className="navbar" id="header">
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/000000/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png" alt="Spotify logo" />
                    <span className="navbar-brand mb-0 h1">SpotiSearch</span>
            </nav>
        </React.Fragment>
    )
}