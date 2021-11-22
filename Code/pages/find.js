import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);

export default function find(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        routes={[]}
        brand="Is low poo?"
        color="rose"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      
      {/* Tem que colocar um paralax aqui, se não ele não rola */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <h2>Pesquise por nome do produto ou ingredientes para descobrir mais...</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
