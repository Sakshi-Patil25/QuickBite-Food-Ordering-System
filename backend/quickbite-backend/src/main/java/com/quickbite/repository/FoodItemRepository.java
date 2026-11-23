package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickbite.entity.FoodItem;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

}