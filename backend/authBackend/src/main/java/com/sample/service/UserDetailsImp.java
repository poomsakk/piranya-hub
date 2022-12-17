package com.sample.service;

import com.sample.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserDetailsImp implements UserDetails {
    private static final long serialVersionUID = 1L;
    private String id;
    private String username;

    private List<String> lodgeown;

    @JsonIgnore
    private String password;
    private Collection<? extends  GrantedAuthority>authorities;

    public String getId(){
        return id;
    }

    public UserDetailsImp(String id, String username, String password, List<String> lodgeown, Collection<? extends GrantedAuthority> authorities){
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
        this.lodgeown = lodgeown;
    }

    public List<String> getLodgeOwn(){
        return lodgeown;
    }

    public static UserDetailsImp build(User user){
        return new UserDetailsImp(user.getId(), user.getUsername(),user.getPassword(),user.getLodgeOwn(), new ArrayList<>());
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
