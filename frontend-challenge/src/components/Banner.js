import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>More than just shorter links</h2>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="banner-right">
        <img src="/images/jasper.jpg" />
      </div>
    </div>
  );
};

export default Banner;
