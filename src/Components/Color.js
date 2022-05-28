import React, { useEffect } from "react";

export default function(props) {

    // Convert RGB to Hex
    function convert(a,b,c){return"#"+((256+a<<8|b)<<8|c).toString(16).slice(1)}

    const [clicked, setClicked] = React.useState(false)
    const rgb = props.rgb.join(",")
    const hex = convert(rgb[0],rgb[1],rgb[2])

    useEffect(()=> {
        const timeOut = setTimeout(() => {
            setClicked(false)
            console.log(true);
        }, 2000)
        return () => clearTimeout(timeOut)
    }, [clicked]) 
    return (
        <div 
        onClick={()=> {
            navigator.clipboard.writeText(hex)
            setClicked(true)            
        }}
        style={{
            backgroundColor: `rgb(${rgb})`,
            color: props.index > 9  ? "white" : "black" 
        }}>
            <p>{hex}</p>
            <p>{props.weight}%</p>
            {clicked && <p> Copied to Clipboard</p>}
        </div>
    )
}