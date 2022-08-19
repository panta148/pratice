import React, { Component } from 'react'
import './Quize.css'

export class Question extends Component {
    render() {
        const { question, option1, option2, option3, option4 } = this.props
        return (
            <>
                <div className="content">
                    <h4>{question}</h4>
                    <hr />
                    <div className='options'>
                        <div><input type="radio" className='from-control mx-1' name="option" id="option1" /><span className='text-dark my'>{option1}</span></div>
                        <div><input type="radio" className='from-control mx-1' name="option" id="option1" /><span className='text-dark my'>{option2}</span></div>
                        <div><input type="radio" className='from-control mx-1' name="option" id="option1" /><span className='text-dark my'>{option3}</span></div>
                        <div><input type="radio" className='from-control mx-1' name="option" id="option1" /><span className='text-dark my'>{option4}</span></div>

                    </div>

                </div>




            </>
        )
    }
}

export default Question
