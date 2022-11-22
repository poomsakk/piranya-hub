package com.piranyaHub.matchingBackend.service.strategy;

import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.repository.LodgeRepository;

import java.util.List;

public interface FindByNameStrategy {
    public List<Lodge> executeData(String name);
}
