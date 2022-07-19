import React from "react";
import './common.css'
import Contents from "./Contents";
export default function ProjectContent() {
    return (
        <div>
            <h1>P R O J E C T S</h1>
            <hr className="Header2" />
            <Contents className='project_contents'>
                <h3>Developer community</h3>
                <img className="project_picture" src="img/1_main.png"></img>
            </Contents>
            <Contents className='project_contents'>
                <h3>Disabled Career Fair</h3>
            </Contents>
            <Contents className='project_contents'>
                <h3>Developer community</h3>
            </Contents>
        </div>
    )
}