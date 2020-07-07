import React from 'react';
import {motion} from 'framer-motion';

const hamburgerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type:"spring", 
          delay:0.2
        }
      },
      exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
      }
}

const HamburgerMenu = () => {
    return (
        <motion.div 
            className="hamburger"
            variants={hamburgerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <div className="hamburger-line-1"></div>
            <div className="hamburger-line-2"></div>
            <div className="hamburger-line-3"></div>
        </motion.div>
    )
}

export default HamburgerMenu;
