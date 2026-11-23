package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.quickbite.entity.FoodRecommendation;

public interface FoodRecommendationRepository
        extends JpaRepository<FoodRecommendation, Long> {

}