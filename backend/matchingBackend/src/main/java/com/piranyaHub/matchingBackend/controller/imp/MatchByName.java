package com.piranyaHub.matchingBackend.controller.imp;

import com.piranyaHub.matchingBackend.controller.MatchingControllerGet;
import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.service.MathchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin
public class MatchByName implements MatchingControllerGet <List<Lodge>> {

    @Autowired
    private MathchingService mathchingService;

    @Override
    @GetMapping("/findByName/{name}")
    public List<Lodge> matchBy(@PathVariable("name") String str) {
        return  mathchingService.findByFome(str);
    }
}
