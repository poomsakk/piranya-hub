package com.piranyaHub.matchingBackend.controller.imp;

import com.piranyaHub.matchingBackend.controller.MatchingControllerPost;
import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.model.ReqBody;
import com.piranyaHub.matchingBackend.service.MathchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin
public class Filter implements MatchingControllerPost<List<Lodge>> {

    @Autowired
    private MathchingService mathchingService;

    @Override
    @PostMapping("/filter")
    public List<Lodge> filter(ReqBody reqBody) {
        return mathchingService.filter(reqBody.getFacilitiesInput(),
                reqBody.getRadiusFromMid(),
                reqBody.getMinCostPerMonth(),
                reqBody.getMaxCostPerMonth());
    }
}
