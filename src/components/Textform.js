import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase","success")
    }
    
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase","success")
    }

    const handleClearClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert(" Cleared All","success")
    }
    
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert(" Text Copied","success")
    }
    
    const handleExtraSpaces=()=>{
        let newText=text.split(/[]+/);
        setText(newText.join(" "))
        props.showAlert(" Spaces have been removed","success")
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div className='container'>
            <h5>{props.heading}</h5>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-2">
            <h5>Summary</h5>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
        </>
    )
}
