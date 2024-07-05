import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: menuOpened ? '0' : '-100%',
        transition: 'right 0.5s ease-in-out',
      };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div>
          ROckDrills 
          <img src="./water.png" alt="logo" width={45} />
        </div>

        <div className="flexCenter h-menu" style={getMenuStyles()}>
          <Link to="residencies" smooth={true} duration={500}>
            Services
          </Link>
          <Link to="our-values" smooth={true} duration={500}>
            Our values
          </Link>
         

          <Link to="contact-us" smooth={true} duration={500}>
            Contact Us
          </Link>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="mailto:ellayaraja667@gmail.com">Contact</a>
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </section>
  );
};

export default Header;
