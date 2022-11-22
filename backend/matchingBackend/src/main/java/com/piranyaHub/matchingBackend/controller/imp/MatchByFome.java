package com.piranyaHub.matchingBackend.controller.imp;

import com.piranyaHub.matchingBackend.controller.MatchingControllerGet;
import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.service.MathchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/match")
@CrossOrigin
public class MatchByFome implements MatchingControllerGet <List<Lodge>> {
    @Autowired
    private MathchingService mathchingService;

    @Override
    @GetMapping("/findByFome/{name}")
    public List<Lodge> matchBy(String str) {
        return  mathchingService.findByFome(str);
    }
}
