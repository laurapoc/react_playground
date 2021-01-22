import React from "react";
// import NavigationItem from "./navigationItem/NavigationItem.module.css";

import classes from "./Navigation.module.css";
import NavigationItem from "./navigationItem/NavigationItem";

const Navigation = (props) => (

    <ul className={classes.nav}>
      <NavigationItem link="/" exact >HOME</NavigationItem>
      <NavigationItem link="/component"  >TEST COMPONENT</NavigationItem>

    </ul>

);

export default Navigation;
