import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigationlink.module.css";
import { Categorycard } from "./Categorycard";
import vase from "../styles/vase.png";
import perfume from "../styles/perfume.png";
import skincare from "../styles/skincare.png";

export const NavigationLink = ({ func }) => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        className={styles.navigationlink}
        onClick={func}
      >
        <NavLink to="/Mobile">
          <Categorycard
            title="Mobiles"
            src="https://www.pinclipart.com/picdir/big/8-87091_cellphone-transparent-clip-art-cell-phone-transparent-background.png"
          />
        </NavLink>
        <NavLink to="">
          <Categorycard
            title="Laptops"
            src="https://www.freeiconspng.com/uploads/laptop-png-8.png"
          />
        </NavLink>
        <NavLink to="">
          <Categorycard title="Home Decoration" src={vase} />
        </NavLink>
        <NavLink to="">
          <Categorycard title="Fragrances" src={perfume} />
        </NavLink>
        <NavLink to="">
          <Categorycard title="Skincare" src={skincare} />
        </NavLink>
      </Stack>
    </>
  );
};
