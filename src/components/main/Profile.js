import Typewriter from 'typewriter-effect';
import { AiFillGithub } from 'react-icons/ai';
import { BsHouse, BsFacebook, BsInstagram } from 'react-icons/bs';
import './common.css'


export default function Profile() {

    return (
        <div>
            <div >
                <img className='profilePicture' src='img/profilePicture.jpg'></img>
                <div className='myName'>Nam Jeong Soo</div>
                <a href='#' className='hover-3'>bu3820@gmail.com</a>
                <hr />
                <h3 className='Header'>ABOUT</h3>
                <div>
                    {/* Typewrite 라이브러리 */}
                    <Typewriter
                        options={{
                            strings: ['Hello!', 'I`m Jeong soo!', 'A Junior Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <hr />
                <div>
                    <a className='profile_icon' href='https://github.com/'><AiFillGithub /></a>
                    <a className='profile_icon' href='https://bu3820.tistory.com/'><BsHouse /></a>
                    <a className='profile_icon' href='https://www.facebook.com/profile.php?id=100004229163874'><BsFacebook /></a>
                    <a className='profile_icon' href='https://www.instagram.com/jeongsoo_nam/'><BsInstagram /></a>

                </div>
                <a href='#'>© Nam Jeong Soo.com</a>
            </div>
        </div>

    )
} 