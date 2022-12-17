package com.sample.service;


import com.sample.repository.UserRepository;
import com.sample.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) throws Exception {
        User u = new User();
        if (userRepository.existsByUsername(user.getUsername())){
           throw new Exception("User already exists!");
        }
        u.setUsername(user.getUsername());
        u.setPassword(passwordEncoder.encode(user.getPassword()));
        u.setLodgeOwn(Collections.emptyList());
//        System.out.println(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(u);
    }

    @Override
    public Optional<User> getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @Override
    public String addLodge(String userId, String lodgeId) {
        Optional<User> data = userRepository.findById(userId);
        if(data.isPresent()){
            User newUser = data.get();
            newUser.getLodgeOwn().add(lodgeId);
            userRepository.save(newUser);
            return "Successful";
        }
        return null;
    }

    @Override
    public String deleteLodge(String userId, String lodgeId) {
        Optional<User> user = userRepository.findById(userId);
        if(!user.isPresent()){
            return "not found";
        }
        if(user.isPresent()) {
            System.out.println("user found");
            User newUser = user.get();
            newUser.getLodgeOwn().remove(lodgeId);
            userRepository.save(newUser);
            return "Successful";
        }
        return null;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username" + username));

//        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),new ArrayList<>());
//        return UserDetailsImp.build(user);
        return new UserDetailsImp(user.getId(), user.getUsername(), user.getPassword(),user.getLodgeOwn(), new ArrayList<>());
    }
}
