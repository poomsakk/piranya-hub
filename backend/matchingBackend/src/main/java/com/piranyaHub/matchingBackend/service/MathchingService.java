package com.piranyaHub.matchingBackend.service;

import com.piranyaHub.matchingBackend.model.Lodge;

import java.util.List;

public interface MathchingService {
    public List<Lodge> findByName(String name);
    public Lodge findById(String id);
    public List<Lodge> filter(List<String> facilitiesInput, Double radiusFromMid, Double minCostPerMonth, Double maxCostPerMonth);
    public List<Lodge> findByFome(String name);
}
