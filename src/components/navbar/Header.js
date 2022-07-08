import {
  AppRegistration,
  Login,
  Logout,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import logo from "../../assets/logo/templarios.png";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  let navigate = useNavigate();
  const { state } = useContext(AppContext);
  const email = sessionStorage.getItem("email");

  return (
    <div className="flex-md-row">
      <Navbar bg="dark navbar-dark" fixed="top" expand="lg">
        <div className="container-fluid">
          <p
            className="btn navbar-brand fw-bold fs-4"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              width="40"
              height="50"
              className="me-2"
            />
            OUR PHARMACY
          </p>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
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
                  <p className="btn nav-link">
                    {email ? <span>Bienvenid@: {email}</span> : null}
                  </p>
                </li>
              </ul>
            </Nav>
            <div className="buttons">
              <p
                className="btn btn-outline-light ms-2"
                onClick={() => navigate("/login")}
              >
                <Login /> Login
              </p>
              <p
                className="btn btn-outline-light ms-2"
                onClick={() => navigate("/register")}
              >
                <AppRegistration /> Sing Up
              </p>
              <p
                className="btn btn-outline-light ms-2"
                onClick={() => navigate("/logout")}
              >
                <Logout /> Logout
              </p>
              <p className="btn btn-outline-light ms-2 me-2 position-relative">
                <ShoppingCart />
                Cart
                {state.cart.length > 0 ? (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cart.length}
                  </span>
                ) : null}
              </p>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
