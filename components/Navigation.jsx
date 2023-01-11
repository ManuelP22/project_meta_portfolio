import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { menuVariants } from '../utils/motion';

export const Navigation = () => (
  <motion.ul variants={menuVariants} className="p-25px top-24 w-[270px] z-10">
    <MenuItem />
  </motion.ul>
);

