import React, {useState} from 'react'

export default function TextForm(props) {

    const [text,textUpdate] = useState("Placeholder");
    const handleOnChange = (e) =>{
        textUpdate(e.target.value);
    }
    const onUpCaseChange = () =>{
        const newText=text.toUpperCase();
        textUpdate(newText);
    }
    const onLoCaseChange = () =>{
        const newText=text.toLowerCase();
        textUpdate(newText);
    }
    const onClearText = () =>{
        textUpdate('');
    }


  return (
    <>
        <div class="container mb-3">
            <textarea class="mt-3 form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange} style={{borderColor: props.mode==='dark'?'white':'black' , backgroundColor: props.mode==='dark'?'#263128':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            <button className="btn btn-outline-success my-2" onClick={onUpCaseChange}>Change to Uppercase</button>
            <button className="btn btn-outline-success my-2 mx-2" onClick={onLoCaseChange}>Change to Uppercase</button>
            <button className="btn btn-outline-success my-2 " onClick={onClearText}>Clear Text</button>
        </div>
        <div class="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <p>Words {text.split(" ").length} , Charcters {text.length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
