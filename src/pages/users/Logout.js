import React, { useEffect } from "react";
import axiosInstance from "../../hooks/axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post("api/user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    sessionStorage.removeItem("email");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("/login");
  });
  return <div>Logout</div>;
}
