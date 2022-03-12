import React from "react";
import './Styles/PageButton.css'

export default function PageButton(props) {
    const { buttonClass } = props
    const changePageHandler = () => {
        props.onChangePage()
    }
    return (
        <React.Fragment>
            <a href="#cardContainer">
                <span className={`pageButton ${buttonClass}`} onClick={changePageHandler}>
                </span>
            </a>
        </React.Fragment >
    )
}