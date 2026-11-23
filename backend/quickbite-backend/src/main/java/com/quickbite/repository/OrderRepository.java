package com.quickbite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.quickbite.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}