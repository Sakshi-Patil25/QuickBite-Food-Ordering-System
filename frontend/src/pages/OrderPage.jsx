import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function OrderPage() {
  const { cart, clearCart } =
    useContext(CartContext);

  const [ordered, setOrdered] =
    useState(false);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const confirmOrder = () => {
    setOrdered(true);
    clearCart();
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          color: "white",
          fontFamily: "Arial,sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            backgroundColor: "#1e293b",
            padding: "35px",
            borderRadius: "20px",
          }}
        >
          {ordered ? (
            <>
              <h1
                style={{
                  color: "#22c55e",
                  textAlign: "center",
                }}
              >
                ✅ Order Placed Successfully
              </h1>

              <p
                style={{
                  textAlign: "center",
                  color: "#cbd5e1",
                }}
              >
                Thank you for choosing
                QuickBite.
              </p>
            </>
          ) : (
            <>
              <h1
                style={{
                  color: "#22c55e",
                  textAlign: "center",
                }}
              >
                Order Summary
              </h1>

              <hr />

              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <strong>
                    {item.foodName}
                  </strong>

                  <div
                    style={{
                      color: "#cbd5e1",
                    }}
                  >
                    ₹{item.price}
                  </div>
                </div>
              ))}

              <hr />

              <h2
                style={{
                  color: "#ff6b35",
                }}
              >
                Total : ₹{total}
              </h2>

              <button
                onClick={confirmOrder}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  backgroundColor: "#ff6b35",
                  border: "none",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Confirm Order
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderPage;