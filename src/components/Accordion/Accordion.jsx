import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export default function Accordion({ title, children, isActive = false }) {
  const [isOpened, setIsOpened] = useState(isActive);
  const accordionBodyHeightRef = useRef(0);

  const accordionBodyRef = useRef();

  // console.log(accordionBodyRef.current);

  useEffect(() => {
    accordionBodyHeightRef.current = accordionBodyRef.current.offsetHeight;
  }, [accordionBodyRef.current]);

  // console.log(accordionBodyHeightRef.current);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div
        ref={accordionBodyRef}
        className={styles.accordionBody}
        style={{
          height: isOpened ? accordionBodyHeightRef.current || 'auto' : 0,
          // display: isOpened ? 'flex' : 'none',
        }}
      >
        {children}
      </div>
    </>
  );
}
