package com.sample.service;

import com.sample.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user) throws Exception;

    Optional<User> getUser(String username);

    List<User> getUser();

    String addLodge(String userId,String lodgeId);

    String deleteLodge(String userid, String lodgeid);
}
