package com.quickbite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.quickbite.entity.FoodItem;
import com.quickbite.repository.FoodItemRepository;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "*")
public class FoodController {

    @Autowired
    private FoodItemRepository foodItemRepository;

    @GetMapping
    public List<FoodItem> getAllFoods() {
        return foodItemRepository.findAll();
    }

    @PostMapping
    public FoodItem addFood(@RequestBody FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    @DeleteMapping("/{id}")
    public String deleteFood(@PathVariable Long id) {
        foodItemRepository.deleteById(id);
        return "Food Deleted Successfully";
    }

    @PutMapping("/{id}")
    public FoodItem updateFood(
            @PathVariable Long id,
            @RequestBody FoodItem updatedFood) {

        FoodItem food =
                foodItemRepository.findById(id)
                .orElseThrow();

        food.setFoodName(updatedFood.getFoodName());
        food.setPrice(updatedFood.getPrice());
        food.setDescription(
                updatedFood.getDescription());
        food.setImageUrl(
                updatedFood.getImageUrl());

        return foodItemRepository.save(food);
    }
}