import React from "react"
import "../css/Sorting.css";

export default function Navbar(props) {
    return (
        <div className={props.darkMode ? "dark": ""}>
        Sort by rating
            <select onChange = {(event) => props.sorting(event.target.value)} >
                <option value="select">select</option>
                <option value="descending">descending</option>
                <option value="ascending">ascending</option>
            </select>
        </div>
    )
}