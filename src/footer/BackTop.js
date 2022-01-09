import { useState, useEffect } from "react";
// @material-ui/icons
import Navigation from "@material-ui/icons/Navigation";

// @material-ui/core components
import Fade from "@material-ui/core/Fade";
import Button from "../services/components/CustomButtons";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./backTopStyle";
import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles(styles);

const BackTop = ({ props }) => {
  const classes = useStyles();
  const [open, set] = useState(false);

  // When the user clicks on the button, scroll to the top of the document smoothly
  const handleClick = () => {
    const view = document.getElementById("__next");
    view.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  // When the user reach close to the bottom, show the button
  useEffect(() => {
    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (bottom) {
        set(true);
      } else {
        set(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <ScrollLink to="header" smooth={true}>
      <Fade in={open}>
        <Button
          className={classes.backTop}
          justIcon
          round
          color="primary"
        >
          <Navigation className={classes.icons} />
        </Button>
      </Fade>
    </ScrollLink>
  );
};

export default BackTop;

// BackTop.defaultProps = {
//   color: "gray"
// };

// BackTop.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   children: PropTypes.node
// };
