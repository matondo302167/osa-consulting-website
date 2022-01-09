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
        image={"https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/webPictureCity%2Fservice.jpg?alt=media&token=f02f3f0d-52cf-409c-96f1-1268a0b7f99c"}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1
                  style={{ wordWrap: "break-word", display: "block" }}
                  className={classes.title}
                >
                  Nos packs
                </h1>
                <h3 className={classes.subtitle}>
                  Nous vous offons de services de qualités pour vos
                  études en Italie
                  experience.
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
