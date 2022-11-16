package com.piranyaHub.matchingBackend.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
//(List<String> facilitiesInput, Double radiusFromMid, Double minCostPerMonth, Double maxCostPerMonth)
public class ReqBody {
    private List<String> facilitiesInput;
    private Double radiusFromMid;
    private Double minCostPerMonth;
    private Double maxCostPerMonth;
}
