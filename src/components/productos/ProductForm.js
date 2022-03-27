import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";

export default function ProductForm({ productoList }) {
  //inicializamos los valores de los campos
  // const { state } = useContext(AppContext);
  // console.log(state.cart);
  const initialFormData = {
    nombre: "",
    categoria: "",
    precio: 0,
    descripcion: "",
    stock: 0,
  };

  let navigate = useNavigate();
  const [datos, setDatos] = useState(initialFormData);
  const [imagen, setImagen] = useState(null);
  const { id } = useParams();

  //////Obtener los campos de un producto para actualizar////////////////
  useEffect(() => {
    if (id) {
      leerProducto(id);
      // console.log("hola");
    }
  }, []);

  const leerProducto = async (productoId) => {
    try {
      await axiosInstance
        .get(`productos/producto-detail/${productoId}`)
        .then((res) => {
          const producto = res.data;
          const { nombre, categoria, precio, descripcion, stock } = producto;
          // console.log(producto);
          setDatos({ nombre, categoria, precio, descripcion, stock });
        });
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////////////////////////

  const handleChange = (e) => {
    if ([e.target.name] == "imagen") {
      setImagen(e.target.files[0]);
      // console.log(e.target.files);
    }
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  /////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("nombre", datos.nombre);
      formData.append("categoria", datos.categoria);
      formData.append("precio", datos.precio);
      formData.append("descripcion", datos.descripcion);
      formData.append("stock", datos.stock);
      if (!id) {
        formData.append("imagen", imagen);
        const res = await axiosInstance.post(
          "productos/producto-create/",
          formData
        );
        console.log(res.data);
        productoList();
      } else {
        if (imagen != null) {
          formData.append("imagen", imagen);
        }
        const res = await axiosInstance.put(
          `productos/producto-update/${id}`,
          formData
        );
        console.log(res.data);
      }
      navigate("/productos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="form" noValidate>
        <div className="mb-3">
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            placeholder="Nombre"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={datos.categoria}
            placeholder="Categoria"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className=" mb-3">
          <label className="label">
            Precio
            <input
              type="number"
              id="precio"
              name="precio"
              value={datos.precio}
              className="form-control"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={datos.descripcion}
            placeholder="Descripcion"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="label">
            Stock
            <input
              type="number"
              id="stock"
              name="stock"
              value={datos.stock}
              className="form-control"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-3">
          <input
            type="file"
            id="imagen"
            name="imagen"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={handleSubmit}
        >
          {id ? "Update" : "Create"}
        </button>
        {id ? (
          <button
            className="btn btn-outline-danger ms-3"
            onClick={() => navigate("/productos")}
          >
            Cancelar
          </button>
        ) : null}
      </form>
    </div>
  );
}
