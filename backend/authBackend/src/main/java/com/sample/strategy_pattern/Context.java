package com.sample.strategy_pattern;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

public class Context {
    private static Context instance;
    private AuthenticationStrategy authenticationStrategy;

    private Context() {
    }

    public void setAuthenticationStrategy(AuthenticationStrategy strategy){
        this.authenticationStrategy = strategy;
    }

    public AuthenticationStrategy getAuthenticationStrategy() {
        return authenticationStrategy;
    }

    public static Context getInstance(){
        if (instance == null){
            instance = new Context();
        }
        return instance;
    }

    public void perform(AuthenticationManagerBuilder auth) throws Exception {
        this.authenticationStrategy.executeStrategy(auth);
    }
}
