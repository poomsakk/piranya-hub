package com.sample.repository;

import com.sample.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String>{
   Optional<User> findByUsername(String username);

   Boolean existsByUsername(String username);
}
