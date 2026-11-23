package com.quickbite.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "food_recommendations")
public class FoodRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long foodId;

    private String recommendedFood;

    public Long getId() {
        return id;
    }

    public Long getFoodId() {
        return foodId;
    }

    public void setFoodId(Long foodId) {
        this.foodId = foodId;
    }

    public String getRecommendedFood() {
        return recommendedFood;
    }

    public void setRecommendedFood(String recommendedFood) {
        this.recommendedFood = recommendedFood;
    }
}