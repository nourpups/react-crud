import classes from "./NButton.module.css";

export const NButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.nBtn}>
      {children}
    </button>
  );
};
