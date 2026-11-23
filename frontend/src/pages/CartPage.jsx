import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const recommendations = [
    "Cold Coffee",
    "Chocolate Brownie",
    "Mango Shake",
    "Ice Cream Sundae",
    "Cheese Burger",
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          color: "white",
          fontFamily: "Arial, sans-serif",
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff6b35",
            marginBottom: "40px",
          }}
        >
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <h2
            style={{
              textAlign: "center",
              color: "#cbd5e1",
            }}
          >
            Cart is Empty
          </h2>
        ) : (
          <>
            <div
              style={{
                maxWidth: "1100px",
                margin: "auto",
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "30px",
              }}
            >
              <div>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#1e293b",
                      padding: "20px",
                      borderRadius: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    <h3>{item.foodName}</h3>

                    <p
                      style={{
                        color: "#cbd5e1",
                      }}
                    >
                      {item.description}
                    </p>

                    <h3
                      style={{
                        color: "#ff6b35",
                      }}
                    >
                      ₹{item.price}
                    </h3>

                    <button
                      onClick={() =>
                        removeFromCart(index)
                      }
                      style={{
                        backgroundColor: "#dc2626",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Recommendations */}

                <div
                  style={{
                    backgroundColor: "#1e293b",
                    padding: "20px",
                    borderRadius: "15px",
                  }}
                >
                  <h2
                    style={{
                      color: "#ff6b35",
                    }}
                  >
                    Recommended For You
                  </h2>

                  {recommendations.map(
                    (food, index) => (
                      <p key={index}>
                        🍴 {food}
                      </p>
                    )
                  )}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#1e293b",
                  padding: "25px",
                  borderRadius: "15px",
                  height: "fit-content",
                }}
              >
                <h2>Order Summary</h2>

                <hr />

                <p>
                  Total Items: {cart.length}
                </p>

                <h2
                  style={{
                    color: "#ff6b35",
                  }}
                >
                  ₹{total}
                </h2>

                <Link
                  to="/order"
                  style={{
                    textDecoration:
                      "none",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      marginTop: "15px",
                      padding: "14px",
                      backgroundColor:
                        "#ff6b35",
                      border: "none",
                      color: "white",
                      borderRadius:
                        "10px",
                      cursor: "pointer",
                    }}
                  >
                    Proceed To Checkout
                  </button>
                </Link>

                <button
                  onClick={clearCart}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "14px",
                    backgroundColor:
                      "#dc2626",
                    border: "none",
                    color: "white",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;