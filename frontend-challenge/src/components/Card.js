import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  const onClickSubmit = () => {
    fetch(
      "https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShortenUrl(data);
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div>
      <div className="">
        <form onSubmit={onClickSubmit}>
          <input placeholder="Shorten a link here..."></input>
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
