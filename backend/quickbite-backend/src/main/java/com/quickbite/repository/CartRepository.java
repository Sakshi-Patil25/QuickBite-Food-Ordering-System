package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickbite.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

}