import React from "react";
import "./style.css"
import Values from "values.js"
import Color from "./Components/Color";

export default function() {

    const [color, setColor] = React.useState("")
    const [error, setError] = React.useState(false)
    const [list, setList] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()
        try {
            let colors = new Values(color).all(10)
            console.log(colors);
            setError(false)
            setList(colors)
        } catch (error) {   
            console.log(error);
            setError(true)
        }
    }

    function handleChange(event) {
        setColor(event.target.value)
    }
    
    console.log(new Values("rgb(9,9,9)").all(10));
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>
                    Colors Generator: 
                </h2>
                <div>
                    <input type="text" 
                        placeholder="Favourite Color:" 
                        value={color} 
                        onChange={handleChange}
                        className={error? "error" : ""}/>
                    <button type="submit"> Submit </button>
                </div>
            </form>
            <div className="colors-container">
                {list.map((colors, index) => {
                    return <Color {...colors} key={index} index={index} />
                }) }
            </div>
        </>
    ) }