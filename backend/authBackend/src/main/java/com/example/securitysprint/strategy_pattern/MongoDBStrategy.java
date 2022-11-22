package com.example.securitysprint.strategy_pattern;

import com.example.securitysprint.service.UserDetailsImp;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

public class MongoDBStrategy implements AuthenticationStrategy {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    public MongoDBStrategy(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void executeStrategy(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
    }

    @Override
    public UserDetails getUserDetails(Authentication authentication) {
        return (UserDetailsImp) authentication.getPrincipal();
    }
}
