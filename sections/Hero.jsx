'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      classNmae={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Manuel Perez
        </motion.h1>
        <motion.div
          variants={textVariant(1.3)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Web</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Eveloper</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        classNmae="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absoulute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]">
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href=''>

          </a>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
