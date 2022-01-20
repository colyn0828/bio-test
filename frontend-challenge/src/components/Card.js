import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [inputUrl, setInputUrl] = useState(null);
  const [shortenUrl, setShortenUrl] = useState("");
  const [validUrl, setValidUrl] = useState(true);

  const onClickSubmit = (e) => {
    if (!e.target.value.includes("https://")) {
      setValidUrl(false);
      setInputUrl("https://" + e.target.value);
    }

    fetch("https://api.shrtco.de/v2/shorten", {
      method: "POST",
      body: JSON.stringify({
        original_link: inputUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortenUrl(data.short_link);
      });
    setValidUrl(true);
  };

  return (
    <div>
      <div className="card">
        <form className="form" onSubmit={onClickSubmit}>
          <input placeholder="Shorten a link here..." />
          <button className="btn">Shorten It!</button>
        </form>
      </div>
      <div className="feedback">
        <p className="message">{validUrl ? "success" : "fail"}</p>
        <div className="url">
          <div className="url-original">{inputUrl}</div>
          <div className="url-shorten">
            {shortenUrl}
            <button className="btn">Copied!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
