import { motion } from 'framer-motion';

import classNames from 'classnames';

import logoSvg from './logo.svg?url';

import flex from '../styles/flex.module.css';
import text from '../styles/text.module.css';
import layout from '../styles/layout.module.css';
import styles from './styles.module.css';
import ParallaxText from '../components/ParallaxText';

const Card = () => {
  return (
    <motion.div
      initial='hide'
      whileInView='show'
      whileHover='hover'
      variants={{
        show: { rotateX: 0, originY: 0, scale: 1 },
        hide: { rotateX: -60, scale: 0.8 },
        hover: { scale: 1.1, originY: 0.5, transition: { duration: 0.1 } },
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
  return (
    <>
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
            className={text['title2']}
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
    </>
  );
};

export default IndexPage;
