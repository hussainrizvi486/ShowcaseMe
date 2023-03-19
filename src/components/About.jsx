import React, { useEffect } from 'react';
import '../styles/about.css'

const About = () => {
    useEffect(() => {
        eval(
            `try {
             TagCanvas.Start(
               'myCanvas',
               '',
               {textColour: '#000',outlineColour: '#0000'}
             );
           }
           catch(e) {
             document.getElementById('myCanvasContainer').style.display = 'none';
           }`
        );
    }, []);


    return (
        <main className='about-section'>
            <section>
                <h1>Me My Self</h1>
            </section>
            <section>
                <div id="myCanvasContainer">
                    <canvas width="300" height="300" id="myCanvas">
                        <p>Anything in here will be replaced on browsers that support the canvas element</p>
                        <ul>
                            <li><a href="/">Google</a></li>
                            <li><a href="/">Fish</a></li>
                            <li><a href="/">Chips</a></li>
                            <li><a href="/">Salt</a></li>
                            <li><a href="/">Vinegar</a></li>
                        </ul>
                    </canvas>
                </div>
            </section>
        </main>
    )
}

export default About