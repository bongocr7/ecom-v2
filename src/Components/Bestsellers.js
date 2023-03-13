import React, { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { Stack } from "@mui/system";
import axios from "axios";
import { Typography } from "@mui/material";

export const Bestsellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        const data = res.data;
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchproducts();
  }, []);

  return (
    <>
      <Stack
        sx={{
          textAlign: "center",
          backgroundColor: "#e7ebf0",
        }}
      >
        <Typography sx={{ padding: 2, fontSize: 32 }}>BestSellers</Typography>
      </Stack>
      <DisplayProducts products={products} />
    </>
  );
};
