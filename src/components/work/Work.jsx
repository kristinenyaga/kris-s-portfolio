import PropTypes from 'prop-types';
import { motion,useInView,useAnimation } from 'framer-motion';
import { useRef,useEffect } from 'react';
const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, 
      
    }
  }
}
export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay
}) => {
  const words = Array.isArray(text) ? text : text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimation();
    useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);
  
  return <Wrapper className={className}>
    <span className='sr-only'>{text}</span>
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      aria-hidden
    >
      {words.map((word, index) => (
      <span key={index} className='inline-block'>
          {word.split('').map((char, index) => (
            <motion.span className='inline-block' variants={defaultAnimations} key={index}>{char}</motion.span>
          ))}  
          <span className="inline-block">&nbsp;</span>
      </span>
      ))}
    </motion.span>
  </Wrapper>
  
}
AnimatedText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  el: PropTypes.string,
  className: PropTypes.string,
};

const Work = () => {
  return (
    <main className="bg-black">
      <div className="mx-auto max-w-6xl pt-14 text-white">
        <section className="h-screen">
          <AnimatedText text={[ "scroll"," down..."]} el="h1" className="text-[90px] md:text-[200px] md:leading-relaxed"/>
          {/* <p className="text-4xl md:text-[200px] md:leading-relaxed">
            Scroll down...
          </p> */}
        </section>
        <section className="flex h-[50vh] flex-col items-center justify-center">
          <AnimatedText
            text={["Hello","you"]}
            el="h1"
            className="text-[130px] md:text-[200px]"
          />
        </section>

        <section className="flex min-h-[50vh] flex-col items-center justify-center">
          <AnimatedText
            el="h2"
            text={[
              "This","is", "written", "on",
              "a", "typing,", "machine","Tick tick",
              "tick tack tack...",
            ]}
            className="text-4xl"
          />
        </section>
      </div>
    </main>
  )
}


export default Work