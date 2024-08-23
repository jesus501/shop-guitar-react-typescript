
import { Header } from "./components/Header";
import GuitarComponent, { Guitar } from "./components/Guitar"; // Asegúrate de importar 'Guitar' desde './components/Guitar'

import useCart from "./hooks/useCart";

export const App = () => {
  const {
    cart,
    data,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    emptyCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        emptyCart={emptyCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data &&
            data.map((guitar: Guitar) => (
              <GuitarComponent
                key={guitar.id}
                guitarData={guitar}
                addToCart={addToCart}
              />
            ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};
