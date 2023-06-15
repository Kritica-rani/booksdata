import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
