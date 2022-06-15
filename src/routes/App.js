import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Home from "../pages/users/Home";
import NotFound from "../pages/NotFound";
import Productos from "../pages/admin/Productos";
import ProductoUpdate from "../pages/admin/ProductoUpdate";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";
import Logout from "../pages/users/Logout";
import Header from "../components/navbar/Header";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/update/:id" element={<ProductoUpdate />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
