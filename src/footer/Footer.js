/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BackTop from "./BackTop";

import Secondary from "./secondary/Secondary";
import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <div style={{backgroundColor:'#000'}}>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <Secondary/>
          </div>
          <div className={classes.right} style={{color:"gray"}}>
            &copy; {1900 + new Date().getYear()}, made by{" "}
            <a
              //href="https://www.privacypolicies.com/live/84add762-1e82-4bf2-917d-62b1524e45a9"
              className={aClasses}
              target="_blank"
            >
              Osa Consulting
            </a>
            .
          </div>
        </div>
      </footer>
      <BackTop />
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
