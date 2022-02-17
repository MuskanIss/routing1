import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setItem({ ...res }));
  }, [id]);
  return (
    // item!=null:`<div>Product Name:${item.name}</div>
    // <div>Price:${item.price}</div>`:"<div>Product does not exist!!!</div>"
    <>
      {item.id == id ? (
        <>
          <div>Product Name:{item.name}</div>
          <div>Price:{item.price}</div>
        </>
      ) : (
        <div>Product does not exist!!!</div>
      )}
    </>
  );
};
