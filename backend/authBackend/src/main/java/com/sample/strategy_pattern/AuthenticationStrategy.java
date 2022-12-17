package com.sample.strategy_pattern;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthenticationStrategy {
    void executeStrategy(AuthenticationManagerBuilder auth) throws Exception;
    UserDetails getUserDetails(Authentication authentication);
}
