import React from 'react'
import Typewriter from "typewriter-effect";
import '../styles/Home.css'

import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

const Home = () => {
    return (
        <main className='section-home-pg'>
            <section>

                <div>
                    <h1 className='section-home-pg-main-heading'>
                        Hey' Here
                        <br />
                        Write Something
                    </h1>
                </div>



                <Typewriter options={{
                    strings: ["A Developer", "A Designer"],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                }} />

                <div className="btn-group">
                    <a href="/">
                        <button>View CV</button>
                    </a>
                    <a href="mailto:hussainrizvi486@gmail.com">
                        <button>Hire me</button>
                    </a>
                </div>

                <div className="home-icons-col">
                    <a href="/"><FiFacebook /></a>
                    <a href="/"><FiGithub /></a>
                    <a href="/"><FiTwitter /></a>
                    <a href="/"><FiLinkedin /></a>
                </div>

            </section>

            <section>
                <img src="https://hussain-rizvi.netlify.app/static/media/avatar.2ca2657d48c5ca95143f.png" alt="" loading='lazy0' />
            </section>



        </main>
    )
}


export default Home