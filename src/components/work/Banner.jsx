import { motion } from "framer-motion";
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { y: 600 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
const sideVariants = {
  initial: {
    opacity: 0,
    x: -100 // Off-screen to the left
  },
  animate: {
    opacity: 1,
    x: 0, // Move to its original position
    transition: {
      delay:0.5,
      duration: 1 // Animation duration
    }
  }
};
  const scrollToPosition = () => {
    const nextSection = document.getElementById('projects'); // You can adjust the selector as per your HTML structure
    
    if (nextSection) {
      // Scroll to the top position of the next section
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
    };
const Banner = () => {

  return (
    <motion.div className="banner z-40 h-[100vh] mt-0  text-textgray font_opensans " variants={banner}>
      <div className=" border-b border-gray ">
        <BannerRowTop title={"my"} />
      </div>
      <div className="border-b border-gray ">
      <BannerRowBottom title={"projects "} />
      </div>


      {/* <BannerRowBottom title={"studio"} /> */}

    </motion.div>
  );
};

const AnimatedLetters = ({ title }) => (
  <motion.span className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter,index) => (
      <motion.span className="row-letter" key={index} variants={letterAni}>{letter}</motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <div className=" text-[250px] font_opensans pr-10">
        <AnimatedLetters title={title} />
      </div>
    <motion.div className="text-base mt-16 left-0 max-w-sm pr-10" initial="initial" animate="animate" variants={sideVariants}>
      <motion.span className=" font_opensans hidden md:block " variants={sideVariants}>
        Explore are some of the websites and databases i have developed.
      </motion.span>
    </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center mod"}>
        <AnimatedLetters title={title} />

      <div className="flex justify-center items-center scroll" onClick={scrollToPosition}>
        <p className="text-center flex justify-center items-center bg-black text-lightgray  rounded-full h-24 w-24 scroll-down bottom-10 cursor-pointer" >Scroll down</p>
      </div>
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Banner;
