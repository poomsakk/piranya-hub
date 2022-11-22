package com.example.securitysprint.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.securitysprint.service.UserDetailsImp;
import com.example.securitysprint.strategy_pattern.Context;
import com.example.securitysprint.strategy_pattern.InMemoryStrategy;
import com.example.securitysprint.strategy_pattern.MongoDBStrategy;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class CustomAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
    private final AuthenticationManager authenticationManager;

    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        super(new AntPathRequestMatcher("/signin", "POST"));
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException {

        String username, password;
        Map<String, String> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);
        username = requestMap.get("username");
        password = requestMap.get("password");

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {

        Context context = Context.getInstance();
        if (context.getAuthenticationStrategy() instanceof MongoDBStrategy) {
            System.out.println("MongoDBStrategy Yeah man!!");
        } else if (context.getAuthenticationStrategy() instanceof InMemoryStrategy) {
            System.out.println("InMemoryStrategy okee !!");
        }

//        System.out.println("Did not reach!!!");

        // condition here
        UserDetails user = context.getAuthenticationStrategy().getUserDetails(authentication);

//        if (context.getAuthenticationStrategy() instanceof MongoDBStrategy) {
//            user = (UserDetailsImp) authentication.getPrincipal();
//        } else if (context.getAuthenticationStrategy() instanceof InMemoryStrategy) {
//            user = (UserDetails) authentication.getPrincipal();
//        }

//        System.out.println("Reach!!!!!!!!!!!!!!!");

        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining()))
                .sign(algorithm);

        String refresh_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .sign(algorithm);

        Map<String, String> token = new HashMap<>();

        // condition here too
        if (context.getAuthenticationStrategy() instanceof MongoDBStrategy) {
            token.put("id", ((UserDetailsImp)user).getId());
            token.put("lodgeOwn", ((UserDetailsImp)user).getLodgeOwn().toString());
        }

        token.put("access_token", access_token);
        token.put("refresh_token", refresh_token);
        new ObjectMapper().writeValue(response.getOutputStream(), token);
    }


}
