import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((res) => setData([...res]));
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            Product Name:{item.name} | Price:{item.price} |{" "}
            <Link to={`${item.id}`}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
};
