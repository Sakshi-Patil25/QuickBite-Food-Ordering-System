import { useEffect, useState, useContext } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import pizzaImg from "../assets/images/pizza.jpg";
import biryaniImg from "../assets/images/biryani.jpg";
import burgerImg from "../assets/images/burger.jpg";
import dosaImg from "../assets/images/dosa.jpg";

import northImg from "../assets/images/north.jpg";
import southImg from "../assets/images/south.jpg";
import dessertImg from "../assets/images/dessert.jpg";
import beverageImg from "../assets/images/beverage.jpg";

function MenuPage() {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("ALL");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getFoodImage = (food) => {
    const description =
      food.description?.toUpperCase() || "";

    if (description.includes("[PIZZA]"))
      return pizzaImg;

    if (description.includes("[BIRYANI]"))
      return biryaniImg;

    if (description.includes("[BURGER]"))
      return burgerImg;

    if (description.includes("[SOUTH]"))
      return southImg;

    if (description.includes("[NORTH]"))
      return northImg;

    if (description.includes("[DESSERT]"))
      return dessertImg;

    if (description.includes("[BEVERAGE]"))
      return beverageImg;

    return dosaImg;
  };

  const filteredFoods =
    selectedCategory === "ALL"
      ? foods
      : foods.filter((food) =>
          food.description
            ?.toUpperCase()
            .includes(selectedCategory)
        );

  const categories = [
    "ALL",
    "PIZZA",
    "BIRYANI",
    "BURGER",
    "SOUTH",
    "NORTH",
    "DESSERT",
    "BEVERAGE",
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          padding: "40px",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff6b35",
          }}
        >
          Explore Our Menu
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Freshly prepared dishes crafted
          to satisfy every craving.
        </p>

        {/* Category Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  selectedCategory === category
                    ? "#ff6b35"
                    : "#1e293b",
                color: "white",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Cards */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              style={{
                width: "280px",
                backgroundColor: "#1e293b",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  "0px 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={getFoodImage(food)}
                alt={food.foodName}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3>{food.foodName}</h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    minHeight: "70px",
                  }}
                >
                  {food.description}
                </p>

                <h3
                  style={{
                    color: "#ff6b35",
                    marginTop: "auto",
                  }}
                >
                  ₹{food.price}
                </h3>

                <button
                  onClick={() =>
                    addToCart(food)
                  }
                  style={{
                    backgroundColor: "#ff6b35",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuPage;