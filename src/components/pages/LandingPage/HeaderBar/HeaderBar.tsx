import React from "react";
import menuImage from "../../../../assets/images/menu.png";

function HeaderBar() {
  const openNav = () => {
    document.getElementById("myNav")?.classList.toggle("menu-width");
    document
      .querySelector(".custom-menu-btn")
      ?.classList.toggle("menu-btn-style");
  };
  return (
    <header className="header-section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom-nav-container d-flex justify-content-between">
          <a className="navbar-brand" href="index.html">
            <span> RockerZZ </span>
          </a>
          <div className="" id="">
            <div className="user-option d-flex align-items-center">
              <a href="">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Login</span>
              </a>
              <form className="form-inline">
                <input type="search" placeholder="Search" />
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="custom-menu-btn">
              <button onClick={() => openNav()}>
                <img src={menuImage} alt="" />
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="blog.html">Blog</a>
                <a href="testimonial.html">Testimonial</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderBar;
