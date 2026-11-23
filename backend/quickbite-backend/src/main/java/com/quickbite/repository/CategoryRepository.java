package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickbite.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}