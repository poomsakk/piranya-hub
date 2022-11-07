package com.example.securitysprint.service;

import com.example.securitysprint.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

public class UserDetailsImp implements UserDetails {
    private static final long serialVersionUID = 1L;
    private String id;
    private String username;

    @JsonIgnore
    private String password;
    private Collection<? extends  GrantedAuthority>authorities;

    public String getId(){
        return id;
    }

    public UserDetailsImp(String id, String username, String password, Collection<? extends GrantedAuthority> authorities){
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetailsImp build(User user){
        return new UserDetailsImp(user.getId(), user.getUsername(),user.getPassword(), new ArrayList<>());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
