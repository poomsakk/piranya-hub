package com.piranyaHub.landLordBackend.controller;

import com.piranyaHub.landLordBackend.model.Lodge;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface LodgeControllerGet <Lodge> {
    @GetMapping("/get/")
    Lodge getLodge(String... str);

//    @GetMapping("/list")
//    public List<Lodge> getLodges();

}
