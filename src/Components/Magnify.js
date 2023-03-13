import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default function Magnify({ product }) {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "",
          src: product,
          width: 600,
          height: 560,
        },
        largeImage: {
          src: product,
          sizes: 600,
          width: 4800,
          height: 4800,
        },
      }}
    />
  );
}
