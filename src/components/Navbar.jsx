import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-100 text-xl items-center px-4 md:px-12 h-20">
        <a href="#">J.Doe</a>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-70 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 w-screen h-screen bg-gray-900 text-gray-200 z-50 flex flex-col items-center justify-center"
      >
        <ul className="font-semibold text-4xl space-y-8 text-center cursor-pointer">
          <li>
            <Link
              to="skills"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
