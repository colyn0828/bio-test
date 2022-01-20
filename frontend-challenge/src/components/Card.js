import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  const onClickSubmit = () => {
    fetch("https://api.shrtco.de/v2/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShortenUrl(data);
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div>
      <div className="card">
        <form onSubmit={onClickSubmit}>
          <input placeholder="Shorten a link here..." />
          <button className="btn">Shorten It!</button>
        </form>
      </div>
      <div className="feedback">
        <p className="message"></p>
        <div className="url">
          <div className="url-original"></div>
          <div className="url-shorten">
            <button className="btn">Copied!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
