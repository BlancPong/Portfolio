import React from "react";
import './common.css'

window.onload = setTimeout(function SetTime() {
    document.getElementsByClassName("Header3").style.display = 'none';
}, 2000)


export default function AboutMe() {

    return (
        <div>
            <h1>ABOUT ME</h1>
            <hr className="Header2" />
            <h3>I N T R O</h3>
            <div>
                Hi! I'm Jeongsoo, a junior front-end developer seeking for the job opportunity.
            </div>
            <div>
                I like to ponder on a given problem and I am happy when I solve it
            </div>
            <h3 className="Header3" id="loading">C U R R E N T L Y</h3>
        </div >

    )
}