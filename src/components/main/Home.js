import React from 'react'
import Contents from './Contents'
import AboutSite from './AboutSite'
import Profile from './Profile'
import MyInfo from './MyInfo'
import './common.css'

export default function Home() {
    return (
        <div>
            <Contents className='main profile'>
                <Profile />
            </Contents>
            <Contents className='mainText'>
                <AboutSite />
            </Contents>
            <Contents className='mainText'>
                <MyInfo />
            </Contents>
        </div>
    )
}