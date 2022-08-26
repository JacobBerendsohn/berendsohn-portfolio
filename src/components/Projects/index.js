import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Projects = () => {
  
  const [letterClass] = useState('text-animate')

  return (
    <>
        <div className='container projects-page'>
          <div className='text-zone'>
            <h1>
              <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                                idx={15} />
            </h1>
          </div>
        </div>
        <Loader type="ball-zig-zag" />
    </>
  )
}

export default Projects