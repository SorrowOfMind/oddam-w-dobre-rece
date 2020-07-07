import React from 'react';
import {motion, useCycle} from 'framer-motion';

import HamburgerToggle from './HamburgerToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 320px 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      // restDelta: 3
    }
  }),
  closed: {
    clipPath: "circle(29px at 320px 40px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HamburgerMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <motion.div
            initial={false}
            // className="hamburger"
            // variants={hamburgerVariants}
            // initial="hidden"
            // animate="visible"
            animate={isOpen ? "open" : "closed"}
            >
             <motion.div className="background" variants={sidebar}/>
             <HamburgerToggle toggle={() => toggleOpen()} /> 
        </motion.div>
    )
}

export default HamburgerMenu;
