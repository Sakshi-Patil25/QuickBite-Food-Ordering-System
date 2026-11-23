import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AdminPage() {
const navigate = useNavigate();

  useEffect(() => {

    const role =
      localStorage.getItem("userRole");

    const token =
      localStorage.getItem("token");

    if (
      role !== "admin" ||
      !token
    ) {
      navigate("/login");
    }

  }, [navigate]);

  const [foods, setFoods] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [foodName, setFoodName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [imageUrl, setImageUrl] =
    useState("");

  const [description, setDescription] =
    useState("");

  const loadFoods = () => {
    axios
      .get("http://localhost:8080/api/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  useEffect(() => {
    loadFoods();
  }, []);

  const saveFood = async () => {
    try {
      if (editingId) {
        await axios.put(
          `http://localhost:8080/api/foods/${editingId}`,
          {
            foodName,
            price,
            imageUrl,
            description,
          }
        );

        alert("Food Updated ✅");

        setEditingId(null);
      } else {
        await axios.post(
          "http://localhost:8080/api/foods",
          {
            foodName,
            price,
            imageUrl,
            description,
          }
        );

        alert("Food Added ✅");
      }

      setFoodName("");
      setPrice("");
      setImageUrl("");
      setDescription("");

      loadFoods();

    } catch (error) {
      console.error(error);
      alert("Operation Failed ❌");
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/foods/${id}`
      );

      alert("Food Deleted ✅");

      loadFoods();

    } catch (error) {
      console.error(error);
      alert("Delete Failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          color: "white",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff6b35",
          }}
        >
          Admin Dashboard
        </h1>

        {/* FORM */}

        <div
          style={{
            maxWidth: "700px",
            margin: "40px auto",
            backgroundColor: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>
            {editingId
              ? "Edit Food"
              : "Add New Food"}
          </h2>

          <input
            value={foodName}
            onChange={(e) =>
              setFoodName(e.target.value)
            }
            placeholder="Food Name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />

          <input
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            placeholder="Price"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />

          <input
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(e.target.value)
            }
            placeholder="Image URL"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Description"
            style={{
              width: "100%",
              height: "120px",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={saveFood}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px",
              backgroundColor: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {editingId
              ? "Update Food"
              : "Add Food"}
          </button>
        </div>

        {/* FOOD LIST */}

        <div
          style={{
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          <h2>Manage Foods</h2>

          {foods.map((food) => (
            <div
              key={food.id}
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                marginTop: "15px",
                borderRadius: "12px",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{food.foodName}</h3>

                <p>
                  {food.description}
                </p>

                <p>
                  ₹{food.price}
                </p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setEditingId(
                      food.id
                    );

                    setFoodName(
                      food.foodName
                    );

                    setPrice(
                      food.price
                    );

                    setImageUrl(
                      food.imageUrl
                    );

                    setDescription(
                      food.description
                    );
                  }}
                  style={{
                    backgroundColor:
                      "#2563eb",
                    color: "white",
                    border: "none",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "8px",
                    cursor:
                      "pointer",
                    marginRight:
                      "10px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteFood(
                      food.id
                    )
                  }
                  style={{
                    backgroundColor:
                      "#dc2626",
                    color: "white",
                    border: "none",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "8px",
                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AdminPage;