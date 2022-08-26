import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import myResume from '../../assets/pdfs/Berendsohn_Resume_2022.pdf';


const About = () => {

    const [letterClass] = useState('text-animate')

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hello, my name is Jacob Berendsohn and I am from New Milford Connecticut. 
                        I am a recently graduated software developer looking for work remote or in office, 
                        preferably somewhere I find interesting and challenging.
                    </p>
                    <br/>
                    <p>
                        Some hobbies of mine include snowboarding, reading, 
                        basketball, working out, cooking, and going on hikes / walks with my dog. I have been coding since I built my first computer at 13, 
                        and would love to find a company and team I synergize with.
                    </p>
                    <br/>
                    <p>
                        I attended Marist College and graduated last May with a degree in Computer Science with a concentration on Software Development. 
                        I also have minors in IT and IS.
                    </p>
                    <br/>
                    <p>
                        Some of the largest projects I worked on in school were a Compiler, which takes in code from a custom language, 
                        and returns machine instructions to be run on a custom operating system, both of which are based on a 6502 assembler. 
                        The other large project I worked on was my Capstone project, 
                        where myself and 4 team members created a secure voting application using a React Native base and Stripe API for authentication.
                    </p>
                    <br/>
                    <h2>
                        To view my resume click <a href={myResume} target='_blank'>here</a>
                    </h2>
                </div>

                <div className='stage-cube-container'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#FFF" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPython} color="#3474a4" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-zig-zag" />
        </>
    )
}

export default About