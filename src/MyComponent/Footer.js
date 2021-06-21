import React from 'react'
import './ComponentCss/Footer.css'
function Footer() {
    return (
        <section className="course-footer">
            <div className="course-map">
                <div className="map-item wide">
                    <h5>Next Step</h5>
                    <div className="links-div">
                        <a className="course" href="https://brilliant.org/courses/math-fundamentals/">
                            <span className="footer-img" ></span>
                            <div>
                                <h4>Mathmatics Fundamentals</h4>
                                <p>The Essential tools for mastering algebra , logic and number theory!</p>
                            </div>
                        </a>
                        <a className="course" href="https://brilliant.org/courses/computer-science-essentials/">
                            <span className="footer-img"></span>
                            <div>
                                <h4>Mathmatics Fundamentals</h4>
                                <p>The Essential tools for mastering algebra , logic and number theory!</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
