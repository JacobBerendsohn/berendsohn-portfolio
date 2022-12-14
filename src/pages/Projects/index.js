import './index.scss';
import Loader from 'react-loaders';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import AnimatedLetters from '../../components/AnimatedLetters'
import JooglePic from '../../assets/images/Joogle.png';
import NetflixPic from '../../assets/images/Netflix_Clone.png';
import AmazonPic from '../../assets/images/Amazon_Clone.png'

const Projects = () => {
  
  const [letterClass] = useState('text-animate')

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

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
                  <div className="project-container">
                    <img src={JooglePic} alt="" />
                    <div className="title"><span className='title-span'> Search Engine </span></div>
                    <div className="overlay"></div>
                    <div className="button"><a href="https://jacobberendsohn-search-engine.netlify.app/" target="_blank"> Demo </a></div>
                    <div className="button-code"><a href="https://github.com/JacobBerendsohn/search-engine" target="_blank"> Code </a></div>
                  </div>
                </div>

                <div className='grid-item'>
                  <div className="project-container">
                    <img src={NetflixPic} alt="" />
                    <div className="title"><span className='title-span'> Netflix Clone </span></div>
                    <div className="overlay"></div>
                    <div className="button"><a href="https://jacobberendsohn-netflix.netlify.app/" target="_blank"> Demo </a></div>
                    <div className="button-code"><a href="https://github.com/JacobBerendsohn/netflix-react" target="_blank"> Code </a></div>
                  </div>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-item'>
                  <div className="project-container">
                    <img src={AmazonPic} alt="" />
                    <div className="title"><span className='title-span'> Amazon Clone (WIP) </span></div>
                    <div className="overlay"></div>
                    <div className="button"><a href="https://jacobberendsohn-amazon.netlify.app/" target="_blank"> Demo </a></div>
                    <div className="button-code"><a href="https://github.com/JacobBerendsohn/amazon-react" target="_blank"> Code </a></div>
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