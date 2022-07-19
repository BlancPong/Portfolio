import React from 'react'
import Contents from './Contents'
import Profile from './Profile'
import './common.css'
import ProjectContent from './ProjectContent'
export default function Project() {
    return (
        <div>
            <Contents className='profile'>
                <Profile />
            </Contents>
            <Contents className='mainText'>
                <ProjectContent />
            </Contents>
        </div>

    )
}