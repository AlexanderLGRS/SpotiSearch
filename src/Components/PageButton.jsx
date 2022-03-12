import React from "react";
import './Styles/PageButton.css'

export default function PageButton(props) {
    const { buttonClass } = props
    const changePageHandler = () => {
        props.onChangePage()
    }
    return (
        <React.Fragment>
            <a href="#buttonContainer">
                <span className={`pageButton ${buttonClass}`} onClick={changePageHandler}>
                <ion-icon size="large" name="chevron-forward-circle"></ion-icon>
                </span>
            </a>
        </React.Fragment >
    )
}