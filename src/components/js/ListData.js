import { React } from 'react'
import data from "./data.json"

function ListData(props) {
    // create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        // return el;
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        // //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default ListData