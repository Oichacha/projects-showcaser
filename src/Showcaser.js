import {React} from 'react'
import './App.css'
import Tool from './Tool'

function Showcaser(props){

    return(
        <div className = "showcaser">
            <h1>{props.Name}</h1>
            <img src = {props.Thumbnail} alt = "thumbnail"></img>
            <p>{props.foo}</p>
            <p>{props.Caption}</p>
        </div>
    )
}

export default Showcaser