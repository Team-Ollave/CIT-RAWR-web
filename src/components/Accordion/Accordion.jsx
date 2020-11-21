import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export default function Accordion({ title, children, isActive = false }) {
  const [isOpened, setIsOpened] = useState(isActive);
  const accordionBodyHeightRef = useRef(0);
  const accordionBodyRef = useRef();

  useEffect(() => {
    accordionBodyHeightRef.current = accordionBodyRef.current.scrollHeight;
  }, [accordionBodyRef]);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpened(!isOpened)}>
        <KeyboardArrowRightIcon
          style={{
            transform: isOpened ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
            transition: 'all 200ms ease',
          }}
        />
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div
        ref={accordionBodyRef}
        className={styles.accordionBody}
        style={{
          height: isOpened ? accordionBodyHeightRef.current || 'auto' : 0,
        }}
      >
        {children}
      </div>
    </>
  );
}
