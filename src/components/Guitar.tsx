// Guitar.tsx

import React from "react";

export interface Guitar {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface GuitarProps {
  guitarData: Guitar;
  addToCart: (item: Guitar) => void;
}

const GuitarComponent: React.FC<GuitarProps> = ({ guitarData, addToCart }) => {
  const { name, image, description, price } = guitarData;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./img/${image}.jpg`}
          alt={`imagen guitarra ${name}`}
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitarData)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default GuitarComponent; // Asegúrate de exportar el componente
