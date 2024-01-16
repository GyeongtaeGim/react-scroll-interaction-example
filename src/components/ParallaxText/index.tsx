import classNames from 'classnames';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

import flex from '../../styles/flex.module.css';
import layout from '../../styles/layout.module.css';
import text from '../../styles/text.module.css';

interface ParallaxTextProps {
  /** 기본 속도 */
  baseVelocity?: number;
}

const ParallaxText = ({
  baseVelocity = 3,
  children,
}: PropsWithChildren<ParallaxTextProps>) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={classNames(
        flex['flex-row'],
        flex['flex-nowrap'],
        layout['overflow-hidden'],
      )}
    >
      <motion.div
        className={classNames(
          flex['flex-row'],
          flex['flex-nowrap'],
          flex['gap-32'],
          text['subtitle1'],
          text['nowrap'],
        )}
        style={{ x }}
      >
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default ParallaxText;
