import React from 'react'
import Contents from './Contents'
import Profile from './Profile'
import AboutMe from './AboutMe'
import './common.css'
export default function About() {
    return (
        <div>
            <Contents className='profile'>
                <Profile />
            </Contents>

            <Contents className='main mainText'>
                <AboutMe />
            </Contents>
        </div>
    )
}