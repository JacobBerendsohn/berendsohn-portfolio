import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
                        Hello my Name is Jacob berendsohn and I am from a small town in Connecticut, I am eagar to join the world of computer science and find a job that best suits my skills and interests.
                    </p>
                    <p>
                        Paragraph 2
                    </p>
                    <p>
                        Paragraph 3
                    </p>
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