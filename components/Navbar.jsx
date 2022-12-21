'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          MANUEL / PEREZ
        </h2>
        {menu ? (
          <RiCloseLine className="w-[24px] h-[24px] object-contain sm:-mr-5 text-white" onClick={() => setMenu(false)} />
        ) : <HiOutlineMenu className="w-[24px] h-[24px] object-contain sm:-mr-5 text-white" onClick={() => setMenu(true)} />}
      </div>
    </motion.nav>

  );
};
export default Navbar;
