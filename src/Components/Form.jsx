import React, { useState } from "react";
import './Styles/Form.css'

export default function Form(props) {
    const [term, setTerm] = useState('')
    const termChangeHandler = (event) => {
        setTerm(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(term)
    }
    return (
        <React.Fragment>
            <form className="form" onSubmit={submitHandler}>
                <label className="form--label" htmlFor="input--song">Search your songs
                </label>
                <input id="input--song" className="form--input" type="text" placeholder="Artist or songs" required onChange={termChangeHandler} />
                <button className="form--button" type="submit">Search</button>
            </form>
        </React.Fragment>
    )
}