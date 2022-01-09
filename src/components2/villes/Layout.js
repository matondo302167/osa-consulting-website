// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Head from "next/head";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../services/components/Header";

import GridContainer from "../../services/components/Grid";
import GridItem from "../../services/components/GridItem";
import Parallax from "../../services/components/Parallax";

import styles from "../../services/components/ComponentLayoutStyle";
import Footer from "../../footer/Footer";

const useStyles = makeStyles(styles);

export default function Layout(
  { children, title, description, author },
  ...props
) {
  const classes = useStyles();
  const { ...rest } = props;
  const schemaData = {
    /* Your schema goes here */
  };
  let brand = "";

  return (
    <div>
      <Header
        brand={brand}
        //rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        image={"https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fparma2.jpeg?alt=media&token=62858389-26ea-4ab4-b60b-bef104b71bac"}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1
                  style={{ wordWrap: "break-word", display: "block" }}
                  className={classes.title}
                >
                 Les villes où nous travaillons
                </h1>
                <h3 className={classes.subtitle}>
                Nos experts vous offriront un service de qualité. Nous sommes basés dans les villes d'Italie suivantes:
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {children}
      </div>
      <Footer/>
    </div>
  );
}
