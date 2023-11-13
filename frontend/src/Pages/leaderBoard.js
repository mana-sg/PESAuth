import React from "react";
import NavBar from "../components/Authentication/NavBar";
import { navItems } from "../constants";

const leaderBoard = () => {
  return <NavBar items={navItems} />;
};

export default leaderBoard;