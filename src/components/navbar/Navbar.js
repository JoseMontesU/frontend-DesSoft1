import {
  AppRegistration,
  Login,
  Logout,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import logo from "../../assets/logo/sharingan.png";

export default function Navbar() {
  let navigate = useNavigate();
  const { state } = useContext(AppContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <p
            className="btn navbar-brand fw-bold fs-4"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              width="60"
              height="70"
              className="me-2"
            />
            THE COLLECTION
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p
                  className="btn nav-link"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p
                  className="btn nav-link"
                  onClick={() => navigate("/productos")}
                >
                  Productos
                </p>
              </li>
              <li className="nav-item">
                <p className="btn nav-link">Usuarios</p>
              </li>
              <li className="nav-item">
                <p className="btn nav-link">About</p>
              </li>
              <li className="nav-item">
                <p className="btn nav-link">Contact</p>
              </li>
            </ul>
            <div className="buttons">
              <p className="btn btn-outline-dark ms-2">
                <Login /> Login
              </p>
              <p className="btn btn-outline-dark ms-2">
                <AppRegistration /> Sing Up
              </p>
              <p className="btn btn-outline-dark ms-2">
                <Logout /> Logout
              </p>
              <p className="btn btn-outline-dark ms-2 position-relative">
                <ShoppingCart />
                Cart
                {state.cart.length > 0 ? (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cart.length}
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
