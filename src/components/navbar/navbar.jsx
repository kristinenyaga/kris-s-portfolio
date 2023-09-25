import mylogo from '../../assets/mylogo.svg'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center mt-0.55 p-2'>
        <NavLink
          className='navitem'
            to="/">
          <img src={mylogo} className='w-20' />
        </NavLink>
        <ul className='flex  justify-center gap-6 items-center'>
          <li>
            <NavLink className='navitem' exact to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
            >
              <span className='text-lightblue'>01.</span>home</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/about">02.about</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/work">03.work</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/services">04.services</NavLink>
          </li>
          <li>
            <NavLink className='navitem' to="/contact">05.contact</NavLink>
          </li>
        </ul>
        <div>
          <button className='p__smalltext border p-1.5 px-8  border-darkblue bg-darkblue rounded-md text-xl text-white'>resume</button>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar