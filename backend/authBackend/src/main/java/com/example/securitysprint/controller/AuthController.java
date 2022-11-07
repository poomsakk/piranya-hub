package com.example.securitysprint.controller;


import com.example.securitysprint.model.User;
import com.example.securitysprint.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class AuthController {

    @Autowired @Qualifier("userServiceImpl")
    UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user){
        return ResponseEntity.ok().body(userService.saveUser(user));
    }

    @PostMapping("/signin")
    public ResponseEntity<Optional<User>> signin(@RequestBody User user){
//        return ResponseEntity.ok().body(reqData);
        System.out.println(user);
        return ResponseEntity.ok().body(userService.getUser(user.getId()));
    }

    @GetMapping("/protected")
    public String takeSecret(){
        return "you got this";
    }

    @GetMapping("/addLodgeId/{userid}/{lodgeid}")
    public  String addLodgeId(@PathVariable("userid") String userid, @PathVariable("lodgeid") String lodgeid){
        return userService.addLodge(userid,lodgeid);
    }
}

