import React, { useState } from 'react'
import '../MyComponent/ComponentCss/Warmup.css'
import Images from '../Images/images'

import { useHistory } from 'react-router-dom'



function Warmup(){


    const history = useHistory();

    const [is1,setIs1] = useState(true)
    const [is2,setIs2] = useState(false)
    const [is3,setIs3] = useState(false)
    const [is4,setIs4] = useState(false)
    const [is5,setIs5] = useState(false)
    const [is6,setIs6] = useState(false)

    

    function handle1(){
            setIs1(!is1)
            setIs2(false)
            setIs3(false)
            setIs4(false)
            setIs5(false)
            setIs6(false)
    }

    function handle2(){
        setIs1(false)
        setIs2(!is2)
        setIs3(false)
        setIs4(false)
        setIs5(false)
        setIs6(false)
}

function handle3(){
    setIs1(false)
    setIs2(false)
    setIs3(!is3)
    setIs4(false)
    setIs5(false)
    setIs6(false)
}
function handle4(){
    setIs1(false)
    setIs2(false)
    setIs3(false)
    setIs4(!is4)
    setIs5(false)
    setIs6(false)
}
function handle5(){
    setIs1(false)
    setIs2(false)
    setIs3(false)
    setIs4(false)
    setIs5(!is5)
    setIs6(false)
}
function handle6(){
    setIs1(false)
    setIs2(false)
    setIs3(false)
    setIs4(false)
    setIs5(false)
    setIs6(!is6)
}
    return (
        <div className="warmup-page" id="warmup">
            <div className="course-sidebar">
                <div className="inner">
                    <div className="col col-1 col-right">
                        <div className="back">
                            <a href="/" onClick={()=>history.push("/")} >Back</a>
                        </div>
                        <h3>Logic</h3>
                    </div>
                </div>
            </div>
            <div className="Course-quiz-flex">
                <div className="course-quiz-content">
                    {
                        is1?<img className="quiz-image" src={Images.one} alt="a" />:<p style={{display:"none"}}></p>
                    }
                    {
                        is2?<img className="quiz-image" src={Images.two} alt="a" />:<p style={{display:"none"}}></p>
                    }
                    {
                        is3?<img className="quiz-image" src={Images.three} alt="a" />:<p style={{display:"none"}}></p>
                    }
                    {
                        is4?<img className="quiz-image" src={Images.four} alt="a" />:<p style={{display:"none"}}></p>
                    }
                    {
                        is5?<img className="quiz-image" src={Images.five} alt="a" />:<p style={{display:"none"}}></p>
                    }
                    {
                        is6?<img className="quiz-image" src={Images.six} alt="a" />:<p style={{display:"none"}}></p>
                    }
                </div>
                <div className="course-quiz-sidebar">
                    <div className='sidebar-header'>
                        <button className="btn-link">Lesson</button>
                    </div>
                    <h1>Warmup Puzzles</h1>
                    <div className="btns">
                        <button className="btn-big">A</button>
                        <button onClick={()=>handle1()} className="btn-small"></button>
                        <button onClick={()=>handle2()} className="btn-small"></button>
                        <button onClick={()=>handle3()} className="btn-small"></button>
                        <button onClick={()=>handle4()} className="btn-small"></button>
                        <button onClick={()=>handle5()} className="btn-small"></button>
                        <button onClick={()=>handle6()} className="btn-small"></button>
                        <button className="btn-big">B</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warmup