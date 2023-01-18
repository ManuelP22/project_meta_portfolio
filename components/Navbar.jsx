'use client';

import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';

import { useDimensions } from '../constants';
import styles from '../styles';
import { navVariants, sidebarVariants } from '../utils/motion';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      ref={containerRef}
      custom={height}
      animate={isOpen ? 'open' : 'closed'}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 sm:ml-[9rem] md:ml-[8rem] lg:ml-[7.5rem] min-[1440px]:ml-[9rem] xl:ml-[22rem] 2xl:ml-[25rem]`}>
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain -mr-[90px]"
        />
        <h2 className="font-extrabold md:text-[24px] min-[320px]:text-[20px] 2xl:text-[32px] min-[320px]:ml-[11rem] min-[320px]:-mt-[0.5rem] leading-[30.24px] text-white -mr-[180px]">
          MANUEL / PEREZ
        </h2>

        <div className="flex justify-end sm:-mt-[70px] min-[320px]:ml-[13.5rem] min-[320px]:-mt-[4.2rem] -mt-[50px] -pr-[80px] relative z-10">
          <motion.div className="w-[300px] bg-white z-0 -mr-60 mt-[47px]" variants={sidebarVariants} />
          <MenuToggle toggle={() => toggleOpen()} />
          <Navigation />
        </div>
      </div>
    </motion.nav>

  );
};
export default Navbar;
