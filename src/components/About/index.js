import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass] = useState('text-animate')

    return (
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

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#DD0031" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About