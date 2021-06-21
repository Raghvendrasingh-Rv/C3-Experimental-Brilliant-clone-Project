import React from 'react'
import Images from '../Images/images'
import './ComponentCss/Courses.css'

function Courses() {
    return (
        <div className="header">
            <div className="course-container">
                <div className="text">
                    <p className="back">
                        <a className="router-link-active" href="/" >Back to all courses</a>
                    </p>
                    <h1>Logic</h1>
                    <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
                    <div className="text-data">
                        <p>The beginning of our introductory math journey is Logic.
                            Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
                        <p>
                            You'll use limited information to make predictions –
                            eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!
                            <button className="btn-link">View prerequisites and next steps.</button>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="intro-img"><img src={Images.intro} alt="intro"></img></div>
                    <div className="stats">
                        <div>
                            <span>37</span>
                            <h3>interactive quizzes</h3>

                        </div>
                        <div>
                            <span>265+</span>
                            <h3>concept and exercises</h3>
                        </div>
                    </div>
                    <button class="card-btn">Let's Go</button>
                </div>
            </div>
        </div>
    )
}

export default Courses
