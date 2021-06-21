import React from 'react'
import { useHistory } from 'react-router-dom'
import Images from '../Images/images';
import './ComponentCss/Intro.css'


function Intro() {
    

    const history = useHistory();

    return (
        <section className="chapters">
            {/* <a href="/" className="anchor"></a> */}
            <ol className="unstyled">
                <li className="chapter">
                {/* <a href="/" className="anchor"></a> */}
                    <header className="quiz-container">
                        <div className="chapter-number">
                            <span>1</span>
                        </div>
                        <div className="chapter-info">
                            <h3>Introduction</h3>
                            <p>Put your logic to the test with these warmups!</p>
                        </div>
                    </header>
                    <div className="quizzes">
                        <div className="quiz-container">
                            <ol>
                                <li onClick={()=>history.push("/Warmup")} className="quiz-wrapper quiz-item">
                                {/* <a href="/" className="anchor"></a> */}
                                    <div className="quiz">
                                        <div className="img">
                                            <span className="brioche-bg"><img src={Images.warm1} alt="afasfss" /></span>
                                        </div>
                                        <div className="text">
                                            <h4>Warmup Puzzles</h4>
                                            <div className="/">
                                                <p>Get started with some logic warmups.</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>
                             

                                <li className="quiz-wrapper quiz-item">
                                    <div className="clickable quiz">
                                        <div className="img">
                                            <span className="brioche-bg"><img src={Images.warm2} alt="ffgdfd" /></span>
                                        </div>
                                        <div className="text">
                                            <h4>Stretegic Deductions</h4>
                                            <div className="/">
                                                <p>Stretch the information you're given as far as it can go!</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>


                                <li className="quiz-wrapper quiz-item">
                                    <div className="clickable quiz">
                                        <div className="img">
                                            <span className="brioche-bg"><img src={Images.warm3} alt="sfgege"/></span>
                                        </div>
                                        <div className="text">
                                            <h4>Truth-seeking</h4>
                                            <div className="/">
                                                <p>Who or what is telling the truth?</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>
                        
                            </ol>
                            
                        </div>
                    </div>
                </li>

        
                 {/* The Rational detective */}
                <li className="chapter">
                {/* <a href="/" className="anchor"></a> */}
                    <header className="quiz-container">
                        <div className="chapter-number">
                            <span >2</span>
                        </div>
                        <div className="chapter-info">
                            <h3>The Rational Detective</h3>
                            <p>Eliminate the impossible and uncover the truth!</p>
                        </div>
                    </header>
                    <div className="quizzes">
                        <div className="quiz-container">
                            <ol>
                                <li className="quiz-wrapper quiz-item">
                                    <div className="quiz">
                                        <div className="img">
                                            <span className="brioche-bg"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Riddles of Order</h4>
                                            <div className="/">
                                                <p>What order do these racers finish in?</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>
                             

                                <li className="quiz-wrapper quiz-item">
                                    <div className="clickable quiz">
                                        <div className="img">
                                            <span className="brioche-bg"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Crefty Counting</h4>
                                            <div className="/">
                                                <p>Learn strategies for counting that go far beyond just counting.</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>


                                <li className="quiz-wrapper quiz-item">
                                    <div className="clickable quiz">
                                        <div className="img">
                                            <span className="brioche-bg"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Truth-seeking</h4>
                                            <div className="/">
                                                <p>Who or what is telling the truth?</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>

                                <li className="quiz-wrapper quiz-item">
                                    <div className="clickable quiz">
                                        <div className="img">
                                            <span className="brioche-bg"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Truth-seeking</h4>
                                            <div className="/">
                                                <p>Who or what is telling the truth?</p>
                                            </div>
                                        </div>
                                        <div className="progress"></div>
                                    </div>
                                </li>
                        
                            </ol>


                            
                        </div>
                    </div>
                </li>

            </ol>
        </section>
    )
}

export default Intro
