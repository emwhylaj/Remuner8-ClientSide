import React from "react";

const Navbar = () => {
  return (
    <header style={{ right: "0px" }}>
      <div className="headerLeft">
        <a href="/" className="logo">
          <img src="/images/profile.png" width="100" height="100" alt="" />
        </a>
      </div>
      <a id="toggle_btn" href="/">
        <span className="barIcon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
      <div className="page-title-box">
        <h3>Remuner8</h3>
      </div>
      <a id="mobile_btn" className="mobile_btn " href="#sidebar">
        <i className="fa fa-bars"></i>
      </a>
      <ul className="nav user-menu">
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="/" className="responsive-search">
              <i className="fa fa-search"></i>
            </a>
            <form action="pages/search">
              <input
                type="text"
                placeholder="Search here"
                className="form-control"
              />
            </form>
            <button className="btn" type="submit">
                
            </button>
          </div>
        </li>
        <li className="nav-item dropdown has-arrow flag-nav"></li>
        <li className="nav-item dropdown"></li>
        <li className="nav-item dropdown"></li>
        <li className="nav-item dropdown has-arrow main-drop"></li>
      </ul>
    </header>
  );
};

export default Navbar;
