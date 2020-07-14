import React from 'react';
import {motion, useCycle} from 'framer-motion';

import HamburgerToggle from './HamburgerToggle';
import HamburgerItems from './HamburgerItems';

const sidebarVariants = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at right 40px top 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
    }
  }),
  closed: {
    clipPath: "circle(29px at right 40px top 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HamburgerMenu = ({homePage}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
   
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="hamburger-wrapper"
            >
             <motion.div className="background" variants={sidebarVariants} />
             <HamburgerToggle toggle={() => toggleOpen()} />
             <HamburgerItems isOpen={isOpen} toggleOpen={toggleOpen} homePage={homePage}/>
        </motion.div>
    )
}

export default HamburgerMenu;
