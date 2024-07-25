import {Link} from "react-router-dom";
import classes from "./NNavbar.module.css"

export const NNavbar = ({children}) => {
  return (
    <div className={classes.nNavbar}>
      {children}
    </div>
  );
}
