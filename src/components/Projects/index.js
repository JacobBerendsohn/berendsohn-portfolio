import './index.scss';
import Loader from 'react-loaders';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import JooglePic from '../../assets/images/Joogle.png';
import NetflixPic from '../../assets/images/Netflix_Clone.png';

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
            <div className='grid-container'>
              <div className='grid-item'>
                <div class="project-container">
                  <img src={JooglePic} alt="" />
                  <p class="title">Search Engine</p>
                  <div class="overlay"></div>
                  <div class="button"><a href="https://jacobberendsohn-search-engine.netlify.app/" target="_blank"> Demo </a></div>
                  <div class="button-code"><a href="https://github.com/JacobBerendsohn/search-engine" target="_blank"> Code </a></div>
                </div>
              </div>
              <div className='grid-item'>
                <div class="project-container">
                  <img src={NetflixPic} alt="" />
                  <p class="title">Netlfix Clone</p>
                  <div class="overlay"></div>
                  <div class="button"><a href="https://jacobberendsohn-netflix.netlify.app/" target="_blank"> Demo </a></div>
                  <div class="button-code"><a href="https://github.com/JacobBerendsohn/netflix-react" target="_blank"> Code </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Loader type="ball-zig-zag" />
    </>
  )
}

export default Projects