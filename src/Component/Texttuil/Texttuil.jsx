import React, { useState } from 'react'
import TextNav from './TextNav'

const Texttuil = () => {
    const [text, settext] = useState('')
    const handleChange = (event) => {

        settext(event.target.value);

    }
    const UpperCase = () => {
        let newtext = text.toUpperCase();
        settext(newtext)

    }
    const LowerCase = () => {
        let newtext = text.toLowerCase();
        settext(newtext)

    }

    return (
        <>
            <TextNav />
            <div className="container-fluid p-5">
                <h4 className='text-center text-dark my-2'>Enter the text You like...................</h4>
                <form>

                    <div class="my-1 form-group">
                        <textarea cols="5" rows="7" class="form-control" value={text} onChange={handleChange}></textarea>
                    </div>


                    <button type="submit" class="btn btn-primary mx-4 mt-2" onClick={UpperCase}>Upper Case</button>
                    <button type="submit" class="btn btn-primary mt-2" onClick={LowerCase}>Lower Case</button>

                </form>
            </div>
            <div className="container-fluid p-5">
                <h5>{(text.split(" ").length) - 1} word's {text.length} letter's</h5>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}

export default Texttuil
