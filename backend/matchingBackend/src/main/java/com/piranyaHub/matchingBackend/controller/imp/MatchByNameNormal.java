package com.piranyaHub.matchingBackend.controller.imp;

import com.piranyaHub.matchingBackend.controller.MatchingControllerGet;
import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.repository.LodgeRepository;
import com.piranyaHub.matchingBackend.service.MathchingService;
import com.piranyaHub.matchingBackend.service.strategy.ConcreteStrategyFindByNameNormal;
import com.piranyaHub.matchingBackend.service.strategy.Context;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin
public class MatchByNameNormal implements MatchingControllerGet <List<Lodge>> {

    private Context context = new Context();
    @Autowired
    private LodgeRepository lodgeRepository;
    @Override
    @GetMapping("/findByName2/{name}")
    public List<Lodge> matchBy(@PathVariable("name") String str) {
        context.setStrategy(new ConcreteStrategyFindByNameNormal(lodgeRepository));
        return  context.executeStrategy(str);
    }


    //    @Autowired
//    private MathchingService mathchingService;
//    @Override
//    @GetMapping("/findByName/{name}")
//    public List<Lodge> matchBy(@PathVariable("name") String str) {
//        return  mathchingService.findByFome(str);
//    }
}
