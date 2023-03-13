import React, { useEffect } from "react";
import {
  Stack,
  Button,
  TextField,
  Typography,
  Badge,
  Popover,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Navbar.module.css";
import BasicMenu from "./BasicMenu";
import BasicPopover from "./Popover.js";
import { useAuth } from "../utils/Auth";
import { useCart } from "../utils/Cartcontext";

function Navbar() {
  const auth = useAuth();
  const user = auth.user;
  const count = 1;

  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        className={styles.Navcontainer}
      >
        <Stack direction="row" spacing={5} className={styles.leftNavcontainer}>
          <Link to="/" className={styles.txt}>
            Dashboard
          </Link>

          <Stack className={styles.iconcontainer}>
            <BasicPopover
              badgecontent={cart.length}
              icon="ShoppingCartIcon"
              content="My Cart"
            ></BasicPopover>
          </Stack>
        </Stack>

        <Stack direction="row">
          <input
            className={styles.searchinput}
            placeholder="Enter Search Text"
          ></input>
          <SearchIcon className={styles.searchbtn} sx={{ fontSize: 40 }} />
        </Stack>

        <Stack direction="row" spacing={5}>
          <Stack className={styles.iconcontainer}>
            <BasicPopover
              badgecontent={count}
              icon="LocalMallIcon"
              content="My Orders"
            ></BasicPopover>
          </Stack>

          <BasicMenu></BasicMenu>
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
