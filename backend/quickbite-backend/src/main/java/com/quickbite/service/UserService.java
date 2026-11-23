package com.quickbite.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickbite.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

}
