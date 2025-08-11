import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  const navigate = () => {
    nav('/about');
  };

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black text-lightgray font_albertsans panel" id="about me">
      <div className="min-h-screen mx-auto max-w-7xl flex justify-center flex-col sm:p-4 lg:p-8 section">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          
          {/* Left Side - Heading */}
          <div className="text-left w-full lg:w-1/2">
            <p className="text-2xl text-gray-500 uppercase tracking-widest opacity-40">Kristine Nyaga</p>
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-2">
              Who am I, really?
            </h2>
            <p className=" italic text-lg mt-3">A curious mind creating beautiful things ✨</p>
          </div>

          {/* Right Side - Bio */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-300 text-base leading-relaxed">
            <p>
              I&apos;m a <span className=" font-medium">full-stack developer</span> and
              <span className="font-medium"> UI/UX designer</span> with a strong focus on building thoughtful, user-centered digital experiences.
              My work bridges design and engineering to create products that are not only functional, but intuitive and responsive across platforms.
            </p>
            <p>
              With a background in both front-end and back-end development, I bring a systems-thinking approach to projects—from prototyping and design systems to scalable architecture and clean, maintainable code.
            </p>
            <p className="">
              I care about simplicity, accessibility, and building things that make sense—for users, teams, and businesses.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
