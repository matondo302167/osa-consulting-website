/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
//import { Context } from "context";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";

// @material-ui/icons
import { Apps, ShoppingBasket, Person } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "./dependencies/CustomDropdown";
import Button from "./dependencies/Button";
import Main from "./dependencies/Main";
import SocialMenu from "./dependencies/Social";

import { cartItemsTotal } from "../../services/components/lib/cartHelpers";

import styles from "./headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  //const router = useRouter();
  //const { state, dispatch } = useContext(Context);
  let auth = false;
  const [itemsInCart, setItemsInCart] = useState(0);

  const getItemsInCart = () => {
    setItemsInCart(cartItemsTotal());
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
        <Main />
      </ListItem>
      {itemsInCart !== null && itemsInCart !== 0 && (
        <ListItem className={classes.listItem}>
          <Link href="/checkout">
            <Button color="transparent" className={classes.navLink}>
              <Badge badgeContent={itemsInCart} color="secondary">
                <ShoppingBasket className={classes.icons} />
              </Badge>{" "}
              Cart
            </Button>
          </Link>
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={!auth || !auth.authToken ? "Account" : auth.user.name}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Person}
          dropdownList={
            [
              <Link to="/login">
                <a className={classes.dropdownLink}>Login</a>
              </Link>,
              <Link to="/signup">
                <a className={classes.dropdownLink}>Register</a>
              </Link>
            ]
          }
        />
      </ListItem>
      <SocialMenu />
    </List>
  );
}
