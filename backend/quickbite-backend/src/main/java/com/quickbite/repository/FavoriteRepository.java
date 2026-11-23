package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickbite.entity.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

}