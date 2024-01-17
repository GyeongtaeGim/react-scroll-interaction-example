import { motion, useScroll, useTransform } from 'framer-motion';

import classNames from 'classnames';

import logoSvg from './logo.svg?url';

import flex from '../styles/flex.module.css';
import text from '../styles/text.module.css';
import layout from '../styles/layout.module.css';
import styles from './styles.module.css';
import ParallaxText from '../components/ParallaxText';
import { useRef } from 'react';

const Card = () => {
  return (
    <motion.div
      initial='hide'
      whileInView='show'
      whileHover='hover'
      variants={{
        show: { rotateX: 0, originY: 0, scale: 1 },
        hide: { rotateX: 90, scale: 0.9 },
        hover: { scale: 1.05, originY: 0.5, transition: { duration: 0.1 } },
      }}
      transition={{ duration: 1 }}
      className={classNames(styles['card'], flex['flex-col'], flex['gap-16'])}
    >
      <motion.div className={styles['card-image']}>IMAGE</motion.div>
      <motion.p className={text['subtitle1']}>Title</motion.p>
      <motion.p>
        Description, Description, Description, Description, Description,
        Description, Description, Description, Description
      </motion.p>
    </motion.div>
  );
};

const IndexPage = () => {
  const pathDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pathScrollProgress } = useScroll({
    target: pathDivRef,
    offset: ['start start', 'end end'],
  });

  const appearSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: appearSideScrollProgress } = useScroll({
    target: appearSectionRef,
    offset: ['start center', 'end end'],
  });
  const appearSideLeftX = useTransform(
    appearSideScrollProgress,
    [0, 1],
    ['0%', '-100%'],
  );

  const appearSideRightX = useTransform(
    appearSideScrollProgress,
    [0, 1],
    ['0%', '100%'],
  );

  const sideScrollSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sideScrollProgress } = useScroll({
    target: sideScrollSectionRef,
    offset: ['start start', 'end end'],
  });
  const sideScrollX = useTransform(sideScrollProgress, [0, 1], ['0%', '-200%']);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        ref={pathDivRef}
        className={classNames(
          layout['absolute'],
          layout['top--64'],
          layout['z--1'],
        )}
      >
        <svg
          width='2377'
          height='2814'
          viewBox='0 0 2377 2814'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            style={{ pathLength: pathScrollProgress }}
            d='M1512.01 25C1675.06 264.5 1139.38 92.5116 1169 332.5C1192.5 523 1603 423.5 1675.06 572.08C1868.49 970.896 337.358 807.025 366.995 1235C397.5 1675.5 1970.9 817.436 2304.12 1303.08C2671.49 1838.5 794.814 2262.94 274.219 2145.57C-246.375 2028.2 160 1657.5 495.626 1786.96C882.865 1936.32 1760.28 2526.33 2184.88 2789'
            stroke='url(#paint0_linear_3_7)'
            strokeWidth='50'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_3_7'
              x1='1051.89'
              y1='-174'
              x2='1051.89'
              y2='2812.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#00E0FF' />
              <stop offset='1' stopColor='#000AFF' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.section className={classNames(styles['main-visual-section'])}>
        <motion.div
          initial='hide'
          whileInView='show'
          variants={{
            show: { scale: 1 },
            hide: { scale: 0.6 },
          }}
          transition={{
            type: 'tween',
            duration: 0.6,
            staggerChildren: 0.1,
            when: 'beforeChildren',
          }}
          className={classNames(
            styles['main-visual'],
            flex['flex-col'],
            flex['item-center'],
            text['align-center'],
          )}
        >
          <motion.h1
            className={text['subtitle1']}
            variants={{
              show: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: '100%' },
            }}
            transition={{ type: 'tween', duration: 0.6 }}
          >
            React Scroll Interaction
          </motion.h1>
          <motion.h2
            className={text['title1']}
            variants={{
              show: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: '100%' },
            }}
            transition={{ type: 'tween', duration: 0.6 }}
          >
            EXAMPLE
          </motion.h2>
          <motion.div
            variants={{
              show: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: '-60%' },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <motion.img
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: 180 }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 3,
              }}
              className={styles['logo-image']}
              width='300px'
              height='300px'
              src={logoSvg}
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section>
        <motion.div
          className={classNames(
            flex['flex-col'],
            flex['align-center'],
            flex['gap-48'],
          )}
        >
          <motion.h2
            initial='hide'
            whileInView='show'
            variants={{
              show: { opacity: 1, y: 0 },
              hide: { opacity: 0, y: '30%' },
            }}
            transition={{ type: 'tween', duration: 0.8 }}
            className={classNames(text['title2'], layout['pt-32'])}
          >
            Card Interaction
          </motion.h2>
          <motion.div
            className={classNames(
              layout['container'],
              flex['flex-row'],
              flex['flex-wrap'],
              flex['gap-48'],
            )}
          >
            {Array(9)
              .fill(null)
              .map((_, key) => (
                <Card key={key} />
              ))}
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        className={classNames(layout['py-128'], flex['flex-col'])}
      >
        <ParallaxText>React Scroll Interaction Example</ParallaxText>
        <ParallaxText baseVelocity={-3}>
          React Scroll Interaction Example
        </ParallaxText>
      </motion.section>
      <motion.section
        className={classNames(
          layout['py-128'],
          flex['flex-col'],
          flex['justfiy-center'],
          styles['appear-side-section'],
        )}
      >
        <motion.div
          ref={appearSectionRef}
          className={classNames(
            layout['container'],
            flex['flex-row'],
            flex['gap-32'],
            flex['item-center'],
          )}
        >
          <motion.div
            style={{
              x: appearSideLeftX,
            }}
            className={classNames(
              flex['flex-1'],
              text['subtitle1'],
              styles['appear-side'],
            )}
          >
            React
          </motion.div>
          <motion.div className={classNames(text['title1'])}>Scroll</motion.div>
          <motion.div
            style={{ x: appearSideRightX }}
            className={classNames(
              flex['flex-1'],
              text['subtitle1'],
              styles['appear-side'],
            )}
          >
            Interaction
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        ref={sideScrollSectionRef}
        className={classNames(styles['side-scroll'])}
      >
        <motion.div
          style={{ x: sideScrollX }}
          className={classNames(
            styles['side-scroll-container'],
            flex['flex-row'],
            flex['flex-nowrap'],
          )}
        >
          <motion.div
            className={classNames(
              styles['side-scroll-content'],
              text['title1'],
              flex['flex-col'],
              flex['item-center'],
            )}
          >
            React
          </motion.div>
          <motion.div
            className={classNames(
              styles['side-scroll-content'],
              text['title1'],
              flex['flex-col'],
              flex['item-center'],
            )}
          >
            Scroll
          </motion.div>
          <motion.div
            className={classNames(
              styles['side-scroll-content'],
              text['title1'],
              flex['flex-col'],
              flex['item-center'],
            )}
          >
            Interaction
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.footer
        className={classNames(
          layout['py-128'],
          flex['flex-col'],
          flex['item-center'],
          text['title2'],
        )}
      >
        React Scroll Interaction Example
      </motion.footer>
    </>
  );
};

export default IndexPage;
