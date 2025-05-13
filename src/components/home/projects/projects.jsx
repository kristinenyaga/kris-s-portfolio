import {useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { images } from '../../constants'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import './projects.css';

const myimages = [
  {
    src: images.portfolio,
    alt: 'Portfolio',
    name: 'My Portfolio',
    link: 'https://kristine-nyaga.vercel.app',
    description: 'A personal portfolio showcasing my design and dev skills.',
    stack: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    src: images.restaurant,
    alt: 'Restaurant',
    name: 'Geritch Restaurant',
    link: 'https://restaurant-blue-one.vercel.app/',
    description: 'A sleek restaurant landing page with animations.',
    stack: ['React', 'CSS', 'GSAP']
  },
  {
    src: images.gympro,
    alt: 'GymPro',
    name: 'GymPro',
    link: 'https://gym-pro.vercel.app',
    description: 'A modern gym site with booking and program info.',
    stack: ['React', 'Tailwind', 'React Router']
  },
  {
    src: images.sumtext,
    alt: 'Sumtext',
    name: 'Sumtext',
    link: 'https://sumtext-summarizer.vercel.app',
    description: 'An AI-powered article summarizer using NLP.',
    stack: ['React', 'Tailwind', 'OpenAI API']
  }
];


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
  const nav = useNavigate()
  const navigate = () => {
    nav('/work')
  }
  return(
    <div className="app__gallery flex__center text-white bg-black section h-[100vh] font_albertsans">
      <div className="app__gallery-content">
        <h1 className="md:text-4xl text-3xl">My work</h1>
        <p className="md:text-2xl text-base" style={{ color: "#AAA" }}>Explore some of the websites i have designed and developed.</p>
        <button className="text-white pt-5 group cursor-pointer">
            <span className="p-2 text-base md:p-3 rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out group-hover:px-8 " onClick={navigate}>view</span> more<BsArrowRight className='inline group-hover:scale-100 group-hover:ml-3 ' />
        </button>
        
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {myimages.map((image, index) => (
            <div className="app__gallery-images_card flex__center relative" key={`gallery-image-${index + 1}`} onClick={()=>window.open(image.link,'_blank')}>
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                <div className="overlay">
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                  <div className="tech-stack">
                    {image.stack.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                </div>


              </div>
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