import geritch from '../../assets/geritch.svg'
import gympro from '../../assets/gympro.svg'
import sumtext from '../../assets/sumtext.svg'
import mern from '../../assets/mern.svg'
import portfolio from '../../assets/portfolio.svg'
export const projectsList = [
  {
    image: gympro,
    name: "GymPro",
    description:
      "Created a fitness website using React that offers users an effortless resource for various exercises for at-home or gym workouts.The website has an intuitive user interface with a robust search feature based on different target body parts. I integrated YouTube links to provide supplementary exercise videos and demonstrations to enhance the variety of the platform. The website aims to empower users to find exercises that align with their fitness goals and incorporate exercise into their daily routines.",
    color: "black",
    github: "https://github.com/kristinenyaga/gym_exercises",
    livelink: "https://gym-pro.vercel.app",
  },
  {
    image: mern,
    name: "Authentication",
    description:
      "Crafted using Node.js and React, to provide security measures and user-friendly account recovery.The authentication app incorporates Two-Factor Authentication (2FA), ensuring the security of user accounts. MongoDB is used as the database to store user information securely. User passwords are hashed using secure algorithms before storing them in the database to enhance security.The implementation of 2FA enhances the security of the application, requiring users to verify their identity through a secondary authentication method.",
    color: "white",
    github: "https://github.com/kristinenyaga/MERN-login",
  },
  {
    image: portfolio,
    name: "My Portfolio",
    description:
      "Developed my portfolio to showcase my skills and projects effectively.To enhance user interaction and visual appeal, I incorporated Framer Motion for seamless animations and to provide an engaging browsing experience. I utilized GSAP to implement advanced animations and effects. Through this project, I demonstrated proficiency in frontend development and a keen eye for design, delivering a dynamic and polished portfolio that reflects my expertise and creativity.",
    color: "black",
    github: "https://github.com/kristinenyaga/kris-s-portfolio",
    livelink: "https://kristine-nyaga.vercel.app",
  },
  {
    image: geritch,
    name: "Geritch restaurant",
    description:
      "Description: Developed a full-stack online marketplace application using React.js for the frontend and Node.js with Express.js for the backend. Integrated Stripe API for payment processing and MongoDB for database management. Implemented user authentication and authorization using JWT tokens. Utilized responsive design principles for optimal user experience across devices.",
    color: "white",
    github: "https://github.com/kristinenyaga/restaurant",
    livelink: "https://restaurant-blue-one.vercel.app",
  },
  {
    image: sumtext,
    name: "Text Summarizer",
    description:
      "Developed a text summarization application using React, enabling users to condense lengthy texts into concise summaries efficiently. The website has robust filtering options such as deciding how long the output should be, how close the output is to the original text and the format of the output",
    color: "black",
    github: "https://github.com/kristinenyaga/text_summarization_app",
    livelink: "https://sumtext-summarizer.vercel.app",
  },
];

export const projects = [
  {
    name: "Cart component",
    description:
      "Developed a React component that can be incorporated into any React project to offer essential shopping cart features. The component is connected to a Django database, all items added to the cart are stored until they are deleted or updated by a user. Emphasizing the principles of reusability and efficiency, the React component reduces development time and complexity. By simply installing the component, developers gain access to its features, eliminating the need to build shopping cart functionality from scratch.",
    color: "black",
    github: "https://github.com/kristinenyaga/reusable-cart-component",
    livelink: "https://www.npmjs.com/package/reusable-cart-component",
  },
  {
    name: "Store database",
    description:
      "Developed a Django-based e-commerce database solution that integrates user authentication, permission management, store product management, a dynamic cart system, and an order processing system. The user authentication mechanism ensures data security, and permission settings enable tailored access levels based on user roles. Store product management allows administrators to manage product catalogs, inventory levels, and pricing structures, while the cart system enables users to add, remove and modify items with data persistence.",
    color: "white",
    github: "https://github.com/kristinenyaga/storefront",
  },
];