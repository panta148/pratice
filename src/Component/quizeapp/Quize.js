import React, { Component } from 'react'
import './Quize.css'
import Question from './Question'
import Quizdata from './Quizdata'
export class Quize extends Component {

    render() {
        function handleClick() {
            alert("Hello to ebveryone in the market")


        }

        return (
            <>
                <div className="cont">
                    <h3 className="text-dark text-center">React Quize Competition</h3>
                    <div className="main">
                        {
                            Quizdata.map((elm) => {
                                return <Question question={elm.question} option1={elm.option1} option2={elm.option2} option3={elm.option3} option4={elm.option4} ans={elm.ans} />
                            })


                        }



                        <div className="bt">
                            <input type="button" value="NEXT" onClick={handleClick} className='btn btn-lg btn-dark mt-5' />
                        </div>

                    </div>

                </div>





            </>
        )
    }
}

export default Quize
