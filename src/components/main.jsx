import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={100}
          />
          <div className="card-img-overlay d-flex align-items-center">
          </div>
          </div>
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">This Season New Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Step into Style: Your Ultimate Fashion Destination Awaits!
              </p>
            </div>
          </div>
    </>
  );
};

export default Home;
