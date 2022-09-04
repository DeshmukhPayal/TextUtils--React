import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case successfully", "success")
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case successfully", "success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard successfully", "success")
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }

    const handleChange =(event) => {
        setText(event.target.value)
    }
  return (
    <>
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleChange} style={{backgroundColor: props.mode ==='light'?'white':'#191c23', color: props.mode ==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>UPPER CASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>lower case</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleSentenceCase}>Sectence Case</button> */}
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear</button>
    </div>
    <div className='container my-3'>
        <h2>Text Summery</h2>
        <p>{text.length > 0 ?text.trim().split("/[]+/").length-1:0} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length)} minutes to read</p>
        {console.log(text.trim())}
        {console.log(text.split())}
    </div>
    <div className='container my-3'>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your text in above box to preview'}</p>
    </div>
   
    </>
  )
}
