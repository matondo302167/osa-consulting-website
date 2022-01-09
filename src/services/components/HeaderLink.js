/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "./context/index";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// core components


import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  let history = useHistory();
  const { state, dispatch } = useContext(Context);
  
  const [itemsInCart, setItemsInCart] = useState(0);

  const getItemsInCart = () => {
    setItemsInCart();
  };

  const logout = () => {
    // context
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    // localStorage
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("auth")) {
        window.localStorage.removeItem("auth");
      }
    }
    // Then redirect
    //router.push("/");
  };

  useEffect(() => {
    getItemsInCart();
  }, []);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      </ListItem>
      {itemsInCart !== null && itemsInCart !== 0 && (
        <ListItem className={classes.listItem}>
          <Link href="/checkout">

          </Link>
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
      </ListItem>
    </List>
  );
}
