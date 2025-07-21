import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,textUpdate] = useState("");
    const handleOnChange = (e) =>{
        textUpdate(e.target.value);
    }
    const onUpCaseChange = () =>{
        const newText=text.toUpperCase();
        textUpdate(newText);
        props.showAlert("Text changed to Upper Case!", "info");
    }
    const onLoCaseChange = () =>{
        const newText=text.toLowerCase();
        textUpdate(newText);
        props.showAlert("Text changed to Lower Case!", "info");
    }
    const onClearText = () =>{
        textUpdate('');
        props.showAlert("Text cleared", "danger");
    }


  return (
    <>
        <div className="container mb-3">
            <textarea className="mt-3 form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange} style={{borderColor: props.mode==='light'?'black':'white' , backgroundColor: props.mode==='dark'?'#263128':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='blue'?'info':'success'} my-1 mx-1`} onClick={onUpCaseChange}>Change to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='blue'?'info':'success'} my-1 mx-1`} onClick={onLoCaseChange}>Change to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='blue'?'info':'success'} my-1 mx-1`} onClick={onClearText}>Clear Text</button>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <p>Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} , Charcters {text.length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
