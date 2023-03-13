import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Mediacard({ product }) {
  const navigate = useNavigate();

  const handlebuy = () => {
    navigate("/buy", { state: { product } });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 200, width: 350, backgroundSize: "100% 100%" }}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle" component="div">
          By {product.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ fontSize: 20 }} onClick={handlebuy}>
          ${product.price}
        </Button>
        <Typography size="small" sx={{ textDecoration: "line-through" }}>
          {"$" +
            Math.trunc(
              (product.price * (100 + product.discountPercentage)) / 100
            )}
        </Typography>
      </CardActions>
    </Card>
  );
}
