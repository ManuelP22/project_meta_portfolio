import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuItemVariants } from '../utils/motion';
import { sections } from '../constants';

const NavLink = ({ hnadleClick }) => (
  <div className="mt-20">
    {sections.map((item) => (
      <Link key={item.title} href={item.to} onClick={() => hnadleClick && hnadleClick()} className="flex flex-row items-start justify-start my-8 text-sm text-gray-600 font-medium hover:text-gray-800">
        <item.icon className="h-6 w-6 mr-2" />
        {item.title}
      </Link>
    ))}
  </div>
);

export const MenuItem = () => (
  <motion.li
    className="mb-[20px] items-center cursor-pointer ml-5"
    variants={menuItemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <NavLink />
  </motion.li>
);
