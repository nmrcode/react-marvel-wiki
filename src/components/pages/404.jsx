import React from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <ErrorMessage />
      <div
        className="message-wrapper"
        style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
      >
        <Link to="/">
          <span style={{ color: "#9f0013" }}>Back to main page</span>
        </Link>
      </div>
    </>
  );
};

export default Page404;
