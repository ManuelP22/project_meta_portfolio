'use client';

import { motion } from 'framer-motion';

import { useState } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { covers } from '../constants';
import { coversVariants } from '../utils/motion';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    if (index === covers.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(covers.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Manuel Perez
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Web</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Eveloper</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <motion.img
            variants={coversVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={covers[index]}
            key={covers[index]}
            custom={direction}
            alt="hero_slides"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <button
            className="absolute top-[40%] left-[20px] transform translate-y z-20 p-[16px] w-[64px] text-2xl aspect-[1/1] border-r-[34px] border-none rounded-full cursor-pointer text-center bg-[#0f0c29] text-white"
            onClick={prevStep}
          >
            ◄
          </button>

          <button
            className="absolute top-[39.5%] right-[20px] transform translate-x z-20 p-[16px] w-[64px] text-2xl aspect-[1/1] border-r-[34px] border-none rounded-full cursor-pointer text-center bg-[#0f0c29] text-white"
            onClick={nextStep}
          >
            ►
          </button>

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
