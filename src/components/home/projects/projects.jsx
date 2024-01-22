import {useRef} from 'react';

import './projects.css';
import { images } from '../../constants'

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
const myimages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]
const Projects = () => {
const scrollRef = useRef(null);

const scroll = (direction) => {
  const { current } = scrollRef;

  if (direction === 'left') {
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
  }

  }
  return(
    <div className="app__gallery flex__center text-white bg-black section">
      <div className="app__gallery-content">
        <h1 className="font_poppins text-4xl">My works</h1>
        <p className="font_poppins text-2xl" style={{ color: "#AAA" }}>Explore some of the websites and databases i have created.</p>
        <button type="button" className='font_poppins text-lg'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {myimages.map((image,index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery-image ${index + 1}`}>
              <img src={image} alt="gallery" />
            </div>
          ))}

        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort
            className="gallery__arrow-icon" onClick={() => scroll('right')} />

        </div>
      </div>
    </div>
  )
  }



export default Projects