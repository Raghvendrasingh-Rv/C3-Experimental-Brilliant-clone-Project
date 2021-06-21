import React from 'react'
import './ComponentCss/Row.css'

function Row() {
    return (
        <div className="rows">
            <div className="row">
                <div className="rowHeader">
                    <div className="rowHead">
                    <h3>Introduction</h3>
                    <h6>put your logic to the test with the warmups</h6> </div>
                    </div>
                <div className="quizes">
                    <div className="quiz">
                        <span></span>
                        <div className="text">
                            <h4 className="b">Warmup</h4>
                            <p>Get started with some logic warmup</p>
                        </div>
                    </div>
                    <div className="quiz">
                        <span></span>
                        <div className="text">
                            <h4 className="b">Truth-Seeking</h4>
                            <p>Get started with some logic warmup</p>
                        </div>
                    </div>
                    <div className="quiz">
                        <span></span>
                        <div className="text">
                            <h4 className="b">strategic Deduction</h4>
                            <p>Get started with some logic warmup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row
