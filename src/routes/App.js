import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";

import Navbar from "../components/navbar/Navbar";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Home from "../pages/users/Home";
import NotFound from "../pages/NotFound";
import Productos from "../pages/admin/Productos";
import ProductoUpdate from "../pages/admin/ProductoUpdate";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<ProductoUpdate />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
