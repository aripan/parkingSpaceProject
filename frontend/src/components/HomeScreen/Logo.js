import React from "react";
import Tilt from "react-tilt";
// import park from "./park_img.png";
import park from "./park.png";

const Logo = () => {
  return (
    <div className="m-4 mt-0">
      <Tilt
        className="Tilt "
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner border border-dark  p-1 shadow">
          <img src={park} alt="Parking-logo" style={{ paddingTop: "5px" }} />
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Image is from
            <a
              href="https://www.flaticon.com/authors/monkik"
              title="Author"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Flaticon
            </a>
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
