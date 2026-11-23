import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const role = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");

    alert("Logged Out Successfully ✅");

    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#111827",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#ff6b35",
          margin: 0,
        }}
      >
        🍔 QuickBite
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/menu"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Menu
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Cart ({cart.length})
        </Link>

        <Link
          to="/order"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Orders
        </Link>

        {!role && (
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        )}

        {role === "admin" && (
          <Link
            to="/admin"
            style={{
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Admin
          </Link>
        )}

        {role && (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;