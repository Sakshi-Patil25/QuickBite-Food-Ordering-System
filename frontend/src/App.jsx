import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AdminPage from "./pages/AdminPage";

function HomePage() {
  const categories = [
    { emoji: "🍕", title: "Pizza" },
    { emoji: "🍛", title: "Biryani" },
    { emoji: "🍔", title: "Burger" },
    { emoji: "🥞", title: "South Indian" },
    { emoji: "🍲", title: "North Indian" },
    { emoji: "🍰", title: "Dessert" },
    { emoji: "🥤", title: "Beverage" },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Hero Section */}

        <div
          style={{
            textAlign: "center",
            padding: "80px 20px 60px",
          }}
        >
          <h1
            style={{
              fontSize: "70px",
              color: "#ff6b35",
              marginBottom: "10px",
            }}
          >
            🍔 QuickBite
          </h1>

          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            Food Delivered Fresh & Fast
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            Order delicious food from your favorite
            restaurants. Fresh meals, quick delivery,
            and unforgettable taste delivered to your
            doorstep.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/menu">
              <button
                style={{
                  backgroundColor: "#ff6b35",
                  border: "none",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Explore Menu
              </button>
            </Link>

            <Link to="/cart">
              <button
                style={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #ff6b35",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                View Cart
              </button>
            </Link>
          </div>
        </div>

        {/* Popular Categories */}

        <div
          style={{
            padding: "40px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#ff6b35",
              marginBottom: "30px",
            }}
          >
            Popular Categories
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.title}
                style={{
                  backgroundColor: "#1e293b",
                  width: "180px",
                  height: "180px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                >
                  {category.emoji}
                </div>

                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}

        <div
          style={{
            padding: "60px 30px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#ff6b35",
              marginBottom: "30px",
            }}
          >
            Why Choose QuickBite?
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e293b",
                width: "280px",
                padding: "25px",
                borderRadius: "15px",
              }}
            >
              <h3>⚡ Fast Delivery</h3>

              <p>
                Get your favorite meals delivered
                quickly to your doorstep.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                width: "280px",
                padding: "25px",
                borderRadius: "15px",
              }}
            >
              <h3>🍽 Quality Food</h3>

              <p>
                Fresh ingredients and delicious
                dishes prepared every day.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                width: "280px",
                padding: "25px",
                borderRadius: "15px",
              }}
            >
              <h3>💳 Easy Ordering</h3>

              <p>
                Smooth ordering experience with
                a simple and user-friendly UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/menu"
        element={<MenuPage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/order"
        element={<OrderPage />}
      />

      <Route
        path="/admin"
        element={<AdminPage />}
      />
    </Routes>
  );
}

export default App;