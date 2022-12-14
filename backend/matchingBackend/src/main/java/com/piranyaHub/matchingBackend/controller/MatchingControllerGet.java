package com.piranyaHub.matchingBackend.controller;

import com.piranyaHub.matchingBackend.model.Lodge;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin
public interface MatchingControllerGet <Lodge> {
    @GetMapping("/findByName/")
    Lodge matchBy(String str);



//    @GetMapping("/findById/{lodge_id}")
//    abstract Lodge matchByid(@PathVariable("lodge_id") String id);
//
//    @GetMapping("/findByName/{name}")
//    abstract List<Lodge> matchByName(@PathVariable("name") String name);
//
//    @GetMapping("/findByFome/{name}")
//    abstract List<Lodge> matchFome(@PathVariable("name") String name);

//    @GetMapping("/findById/{lodge_id}")
//    public Lodge matchByid(@PathVariable("lodge_id") String id){
//        return  mathchingService.findById(id);
//    }

//    @GetMapping("/findByName/{name}")
//    public List<Lodge> matchByName(@PathVariable("name") String name){
//        return  mathchingService.findByFome(name);
//    }
//
//    @GetMapping("/findByFome/{name}")
//    public List<Lodge> matchFome(@PathVariable("name") String name){
//        return  mathchingService.findByFome(name);
//    }

//    @PostMapping("/filter")
//    public List<Lodge> filter(@RequestBody ReqBody reqBody){
//        return  mathchingService.filter(reqBody.getFacilitiesInput(), reqBody.getRadiusFromMid(), reqBody.getMinCostPerMonth(), reqBody.getMaxCostPerMonth());
//    }


}
