import React from "react";
import axiosInstance from "../hooks/axios";
import Producto from "../components/productos/Producto";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productoList();
  }, [setProductos]);

  const productoList = async () => {
    await axiosInstance.get("productos/producto-list/").then((res) => {
      const allProductos = res.data;
      // console.log(res.data);
      setProductos(allProductos);
    });
  };

  if (!productos || productos.length === 0)
    return <p>Can not find any products, sorry</p>;

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />

            <div className="row mt-4">
              {productos.map((product) => {
                return <Producto producto={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
