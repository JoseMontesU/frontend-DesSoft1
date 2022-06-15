import { ShoppingCart } from "@mui/icons-material";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Producto = ({ producto }) => {
  // console.log(producto);
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 text-center p-4">
        <img
          className="card-img-top"
          src={`http://127.0.0.1:8000${producto.imagen}`}
          alt=""
          height="250px"
        />

        <div className="card-body">
          <h5 className="card-title mb-0">
            {producto.nombre.substring(0, 12)}...
          </h5>
          <p className="card-text lead fw-bold">S/{producto.precio}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => handleClick(producto)}
          >
            <ShoppingCart />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default Producto;
