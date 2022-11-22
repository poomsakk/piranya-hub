package com.piranyaHub.landLordBackend.controller.imp;

import com.piranyaHub.landLordBackend.controller.LodgeControllerGet;
import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
public class GetLodges implements LodgeControllerGet<List<Lodge>> {
    @Autowired
    private LodgeService lodgeService;

    @Override
    @GetMapping("/list")
    public List<Lodge> getLodge(String... str) { // TODO : This might make some problems.
        System.out.println("GETLODGE!!!");
        return lodgeService.getAllLodge();
    }
}
