import React from "react";
import "./Newsletter.scss";
import { Send } from "@material-ui/icons";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <p>Get timely updates from your favorite products.</p>
      <div className="form">
        <input type="email" placeholder="Your Email" />
        <Send />
      </div>
    </div>
  );
}

export default Newsletter;
