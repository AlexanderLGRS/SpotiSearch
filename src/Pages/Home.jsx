import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Form from "../Components/Form";
import Header from "../Components/Header";
import SongCard from "../Components/SongCard";
import CardContainer from "../Components/CardContainer";
import PageButton from "../Components/PageButton";
import DetailSongCard from "../Components/DetailSongCard";
import './Styles/Home.css'


const url = 'https://v1.nocodeapi.com/spotisearch/spotify/dDCMLneeqydDKBap/search?q='

export default function Home() {

    const [songsList, setSongsList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [termOfSearch, setTermOfSearch] = useState('');
    const [searchState, setSearchState] = useState(false);

    const [visibility, setVisibility] = useState('hide')
    const [selectedCover, setSelectedCover] = useState('')
    const [selectedTitle, setSelectedTitle] = useState('')
    const [selectedAlbumbType, setSelectedAlbumbType] = useState('')
    const [selectedReleaseDate, setSelectedReleaseDate] = useState('')
    const [selectedArtist, setSelectedArtist] = useState('')
    const [selectedAudio, setSelectedAudio] = useState('')

    const onSubmitHandler = (term) => {
        setTermOfSearch(term)
        setSearchState(true)
    }
    useEffect(() => {
        if (searchState) {
            fetch(`${url}${termOfSearch}&type=track&page=${pageNumber}`, {
                method: "GET",
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.tracks.items[0].preview_url);
                    setSongsList(data.tracks.items)
                    setSearchState(true)
                    if (data.tracks.items.length === 0) {
                        Swal.fire({
                            title: 'There are no matches ',
                            icon: 'info',
                            focusConfirm: true,
                            confirmButtonText:
                                'OK',
                            confirmButtonAriaLabel: 'Thumbs up, great!',
                        })
                        setSearchState(false)
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: error,
                        icon: 'error',
                        focusConfirm: true,
                        confirmButtonText:
                            'OK',
                        confirmButtonAriaLabel: 'Thumbs up, great!',
                    })
                });
        }
    }, [pageNumber, termOfSearch])

    const handleNextPage = () => {
        setPageNumber(pageNumber + 19)
    }
    const handlePrevPage = () => {
        setPageNumber(pageNumber - 19)
    }
    const onSelectSongHandler = (data) => {
        console.log(data);
        setVisibility('')
        setSelectedCover(data.cover)
        setSelectedTitle(data.title)
        setSelectedAlbumbType(data.albumType)
        setSelectedReleaseDate(data.releaseDate)
        setSelectedArtist(data.artist)
        setSelectedAudio(data.audio)
    }
    const hideHandler = () => {
        setVisibility('hide')
    }

    return (
        <React.Fragment>
            <Header />
            <Form onSubmit={onSubmitHandler} />
            <CardContainer>
                {songsList.map((song) =>
                    <SongCard
                        key={Math.random()}
                        cover={song.album.images[1].url}
                        title={song.name}
                        albumType={song.album.album_type}
                        releaseDate={song.album.release_date}
                        explicit={song.album.explicit}
                        artist={song.artists[0].name}
                        audio={song.preview_url}
                        onSelectSong={onSelectSongHandler} />
                )}
            </CardContainer>
            {searchState &&
                <div className="buttonsContainer">
                    <PageButton
                        buttonClass='prev'
                        onChangePage={handlePrevPage} />
                    Page {Math.ceil(pageNumber / 19)}
                    <PageButton
                        buttonClass='next'
                        onChangePage={handleNextPage} />
                </div>
            }

            <DetailSongCard
                onHideHandler={hideHandler}
                visibility={visibility}
                title={selectedTitle}
                cover={selectedCover}
                artist={selectedArtist}
                albumType={selectedAlbumbType}
                releaseDate={selectedReleaseDate}
                audio={selectedAudio}
            />

        </React.Fragment>
    )
}