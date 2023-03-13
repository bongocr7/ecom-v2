import { Typography } from "@mui/material";
import React from "react";
import { DisplayProductscategory } from "./DisplayProductscategory";

export const DisplayProducts = ({ products }) => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return (
    <>
      <ul style={{ backgroundColor: "#e7ebf0" }}>
        {categories.map((category) => {
          return (
            <li>
              <Typography sx={{ padding: 2, fontSize: 32 }}>
                Top Deals on {category}
              </Typography>
              <DisplayProductscategory
                key={products.id}
                products={products}
                category={category}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
