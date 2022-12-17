package com.sample.security;

import com.sample.strategy_pattern.Context;
import com.sample.strategy_pattern.InMemoryStrategy;
import com.sample.filter.CustomAuthenticationFilter;
import com.sample.filter.CustomAuthorizationFilter;
import com.sample.strategy_pattern.MongoDBStrategy;
import com.sample.strategy_pattern.TypeOfAuth;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private final UserDetailsService userDetailsService;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    private Context context;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        TypeOfAuth type = TypeOfAuth.MONGODB;
        context = Context.getInstance();

        if (type == TypeOfAuth.MONGODB) {
            context.setAuthenticationStrategy(new MongoDBStrategy(userDetailsService, passwordEncoder));
        } else if (type == TypeOfAuth.INMEMORY) {
            context.setAuthenticationStrategy(new InMemoryStrategy(passwordEncoder));
        } else if (type == TypeOfAuth.GOOGLE){
           //
        } else if (type == TypeOfAuth.FACEBOOK){
           //
        }
        context.perform(auth);


//        auth.inMemoryAuthentication().withUser("admin").password(passwordEncoder.encode("admin")).roles("USER");
//        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/signup").permitAll()
                .antMatchers(HttpMethod.POST, "/signin").permitAll()
                .antMatchers(HttpMethod.GET, "/protected").authenticated()
                .anyRequest().authenticated();

        http.cors().and()
                .authorizeRequests()
                .and().formLogin().loginPage("/signin").permitAll()
                .and().logout();
        http.addFilterAt(customFilter, UsernamePasswordAuthenticationFilter.class);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

    }


}
