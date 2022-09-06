import LogoTitle from '../../assets/images/j_letter.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass] = useState('text-animate')
    const introOne = ['H', 'i', ',']
    const introTwo = ['I', '\'', 'm', ' ']
    const nameArray = ['J', 'a', 'c', 'o', 'b']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']



    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={introOne}
                            idx={9} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={introTwo}
                            idx={13} />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={16} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={18} />
                    </h1>
                    <h2>
                        Java / Python / React / JavaScript
                    </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

            </div>
            <Loader type="ball-zig-zag" />
        </>
    );
}

export default Home