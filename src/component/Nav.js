import React from "react";
import "../style/nav.css";
import logo from "../img/logoCleverEx.svg";

const linkTitles = ["Servicio", "Servicio", "Servicio", "Servicio", "Servicio"];

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo"></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav justify-content-end margintext">
              {linkTitles.map(t => (
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    {t}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link button-talk" href="#">
                  Hablamos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
