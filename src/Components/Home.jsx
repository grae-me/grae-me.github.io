/**
 * Home
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Background image
 */
import image from "../images/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";

/**
 * Background image alternate text
 */
const imageAltText =
  "A purple and blue image of older technology, including a handheld game console, a computer, and cassette tapes.";

/**
 * Build Home section
 */
const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          position: "absolute",
          top: "6rem",
          width: "100%",
          margin: "1rem",
        }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
