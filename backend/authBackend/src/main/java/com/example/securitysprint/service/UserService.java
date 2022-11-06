package com.example.securitysprint.service;

import com.example.securitysprint.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);

    Optional<User> getUser(String username);

    List<User> getUser();

}
