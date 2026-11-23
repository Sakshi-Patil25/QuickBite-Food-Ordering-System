import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/users/login",
          {
            email,
            password,
          }
        );

        const token = response.data.token;
        const role = response.data.role;

      if (role === "ADMIN") {

        localStorage.setItem(
            "token",
             token
            );

        localStorage.setItem(
            "userRole",
            "admin"
            );

        alert(
          "Admin Login Successful ✅"
        );

        navigate("/admin");

        return;
      }

      if (role === "USER") {

        localStorage.setItem(
  "token",
  token
);

localStorage.setItem(
  "userRole",
  "user"
);

        alert(
          "User Login Successful ✅"
        );

        navigate("/");

        return;
      }

      alert(
        "Invalid Credentials ❌"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Login Failed ❌"
      );
    }
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
              marginTop: "20px",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Login using your registered
            database account.
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;