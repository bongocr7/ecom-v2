import { Stack } from "@mui/system";
import React from "react";
import Card from "./Card";

export const DisplayProductscategory = ({ products, category }) => {
  const categorisedproducts = products.filter((product) => {
    return product.category === category;
  });
  return (
    <>
      <Stack direction="row" justifyContent="space-around">
        {categorisedproducts.map((product) => {
          return <Card product={product}></Card>;
        })}
      </Stack>
    </>
  );
};
