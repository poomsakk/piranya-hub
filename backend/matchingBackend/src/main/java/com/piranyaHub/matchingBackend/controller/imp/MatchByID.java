package com.piranyaHub.matchingBackend.controller.imp;

import com.piranyaHub.matchingBackend.controller.MatchingControllerGet;
import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.service.MathchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/match")
@CrossOrigin
public class MatchByID implements MatchingControllerGet<Lodge> {

    @Autowired
    private MathchingService mathchingService;

    @Override
    @GetMapping("/findById/{lodge_id}")
    public Lodge matchBy(@PathVariable("lodge_id") String str) {
        return  mathchingService.findById(str);
    }

//    @Override
//    @GetMapping("/findById/{lodge_id}")
//    public Lodge matchByid(String id) {
//        return  mathchingService.findById(id);
//    }
//
//    @Override
//    @GetMapping("/findByName/{name}")
//    public List<Lodge> matchByName(String name) {
//        return  mathchingService.findByFome(name);
//    }
//
//    @Override
//    @GetMapping("/findByFome/{name}")
//    public List<Lodge> matchFome(String name) {
//        return  mathchingService.findByFome(name);
//    }

}
