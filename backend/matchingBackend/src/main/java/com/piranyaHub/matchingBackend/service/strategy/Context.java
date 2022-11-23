package com.piranyaHub.matchingBackend.service.strategy;

import com.piranyaHub.matchingBackend.model.Lodge;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

public class Context {
    private FindByNameStrategy strategy;

    public void setStrategy(FindByNameStrategy strategy){
        this.strategy = strategy;
    }

    public List<Lodge> executeStrategy(String name){
        return this.strategy.executeData(name);
    }
}
