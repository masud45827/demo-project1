import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="list-unstyled d-flex">
        <li className="p-4">
          <Link to="/registrations" className="text-decoration-none">All Registrations</Link>
        </li>
        <li className="p-4">
          <Link to="/registration" className="text-decoration-none">Registration</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
