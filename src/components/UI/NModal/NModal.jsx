import './NModal.module.css';
import classes from "./NModal.module.css";

export const NModal = ({children, visible, setVisible}) => {
  const rootClasses = visible === true
    ? [classes.nModal, classes.active]
    : [classes.nModal];
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.nModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
