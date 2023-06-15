import React, { useEffect, useState } from "react";
import { Products } from "../data";
import SingleBook from "./SingleBook";


export default function Home() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    setBooksData(Products);
  }, []);
  console.log("data", booksData);
  return (
    <div className="home">
      {booksData &&
        booksData.map((item) => {
          return (
            <div className="container-book">
              <SingleBook product={item} />
            </div>
          );
        })}
    </div>
  );
}
