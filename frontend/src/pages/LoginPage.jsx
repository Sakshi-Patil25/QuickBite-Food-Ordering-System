import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    if (
      email === "admin@quickbite.com" &&
      password === "admin123"
    ) {
      alert("Admin Login Successful ✅");

      navigate("/admin");

      return;
    }

    if (
      email === "user@quickbite.com" &&
      password === "user123"
    ) {
      alert("User Login Successful ✅");

      navigate("/");

      return;
    }

    alert("Invalid Credentials ❌");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#0f172a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "450px",
            padding: "40px",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#ff6b35",
            }}
          >
            🍔 QuickBite
          </h1>

          <h2
            style={{
              textAlign: "center",
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#cbd5e1",
              marginBottom: "25px",
            }}
          >
            Sign in to continue
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              marginBottom: "15px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <div
            style={{
              marginTop: "25px",
              fontSize: "14px",
              color: "#94a3b8",
            }}
          >
            <p>
              Admin:
              admin@quickbite.com /
              admin123
            </p>

            <p>
              User:
              user@quickbite.com /
              user123
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;