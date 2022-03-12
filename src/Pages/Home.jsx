import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Form from "../Components/Form";
import Header from "../Components/Header";
import SongCard from "../Components/SongCard";
import CardContainer from "../Components/CardContainer";
import PageButton from "../Components/PageButton";
import './Styles/Home.css'


const url = 'https://v1.nocodeapi.com/alexlg/spotify/PSULlrSuidiXcIWh/search?q='

export default function Home() {

    const [songsList, setSongsList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [termOfSearch, setTermOfSearch] = useState('tiger')
    const [searchState, setSearchState] = useState(false)
    const onSubmitHandler = (term) => {
        setTermOfSearch(term)
    }
    useEffect(() => {
        fetch(`${url}${termOfSearch}&type=track&page=${pageNumber}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setSongsList(data.tracks.items)
                setSearchState(true)
                if (data.tracks.items.length === 0){
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

    }, [pageNumber, termOfSearch])

    const handleNextPage = () => {
        setPageNumber(pageNumber + 19)
    }
    const handlePrevPage = () => {
        setPageNumber(pageNumber - 19)
    }

    return (
        <React.Fragment>
            <Header />
            <Form onSubmit={onSubmitHandler} />
            <CardContainer>
                {songsList.map((song) =>
                    <SongCard key={Math.random()} cover={song.album.images[0].url} title={song.name} artist={song.artists[0].name} />
                )}
            </CardContainer>
            {searchState &&
                <div className="buttonsContainer">
                    <PageButton buttonClass='prev' onChangePage={handlePrevPage} />
                    Page {Math.ceil(pageNumber / 19)}
                    <PageButton buttonClass='next' onChangePage={handleNextPage} />
                </div>
            }
        </React.Fragment>
    )
}