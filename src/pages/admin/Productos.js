import { Delete, Update } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/productos/ProductForm";
import axiosInstance from "../../hooks/axios";

export default function Productos() {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoList();
  }, [setProductos]);

  const productoList = async () => {
    const res = await axiosInstance.get("productos/producto-list/");
    setProductos(res.data);
  };

  const handleDelete = async (id) => {
    await axiosInstance
      .delete(`productos/producto-delete/${id}`)
      .then((res) => {
        console.log(res.data);
      });
    productoList();
  };

  return (
    <div className="col-12 row mt-3">
      <div className="col-3">
        <div className="card">
          <h3 className="text-center">Agregar un nuevo producto</h3>
          <ProductForm productoList={productoList} />
        </div>
      </div>

      <div className="col-9">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Imagen</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
              return (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>S/ {producto.precio}</td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000${producto.imagen}`}
                      alt=""
                      height="60px"
                      width="55"
                    />
                  </td>
                  <td>
                    <span>
                      <button
                        className="btn btn-outline-primary me-4"
                        onClick={() => navigate(`/update/${producto.id}`)}
                      >
                        <Update />
                      </button>
                      <button
                        className="btn btn-outline-danger me-0"
                        // onClick={() => navigate(`/delete/${producto.id}`)}
                        onClick={() => handleDelete(producto.id)}
                      >
                        <Delete />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
