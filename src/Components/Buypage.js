import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Magnify from "./Magnify";
import Navbar from "./Navbar";
import Rating from "@mui/material/Rating";
import { useAuth } from "../utils/Auth";
import { useCart } from "../utils/Cartcontext";

export const Buypage = () => {
  const obj = useLocation();
  const product = obj.state.product;
  console.log(product);

  const [img, setImage] = useState(product.thumbnail);

  const auth = useAuth();
  const { cart, addToCart } = useCart();

  const handleBuy = () => {
    const obj = auth.user;

    const userDetails = JSON.parse(localStorage.getItem(obj.Username));
    console.log(userDetails);
    const updatedUserDetails = {
      ...userDetails,
      Orders: [...userDetails.Orders, product],
    };
    localStorage.setItem(obj.Username, JSON.stringify(updatedUserDetails));
  };

  const handleCart = () => {
    const obj = auth.user;

    addToCart(product);
  };

  return (
    <>
      <Navbar></Navbar>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ paddingTop: 8 }}
      >
        <Stack spacing={2} direction="row">
          <Stack spacing={2}>
            {product.images.map((image) => {
              return (
                <>
                  <img
                    src={image}
                    alt=""
                    width={100}
                    height={100}
                    onClick={() => {
                      setImage(image);
                    }}
                  />
                </>
              );
            })}
          </Stack>
          <Magnify product={img}></Magnify>
        </Stack>

        <Stack spacing={2}>
          <Typography>{product.title}</Typography>
          <Typography>{product.description}</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
          />
          <Typography></Typography>
          <Button variant="contained" onClick={handleBuy}>
            {"$" + product.price}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCart}>
            Add to cart
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
