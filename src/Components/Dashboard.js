import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../utils/Cartcontext";
import { Bestsellers } from "./Bestsellers";
import Navbar from "./Navbar";
import { NavigationLink } from "./NavigationLink";

export const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <CartProvider>
        <Navbar />
      </CartProvider>
      <NavigationLink func={handleToggle} />
      {toggle ? <Outlet /> : <Bestsellers />}
    </>
  );
};
