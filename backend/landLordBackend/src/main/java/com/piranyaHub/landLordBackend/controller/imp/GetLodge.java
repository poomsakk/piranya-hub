package com.piranyaHub.landLordBackend.controller.imp;

import com.piranyaHub.landLordBackend.controller.LodgeControllerGet;
import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
public class GetLodge implements LodgeControllerGet <Lodge> {

    @Autowired
    private LodgeService lodgeService;

    @Override
    @GetMapping("/get/{lodge_id}")
    public Lodge getLodge(@PathVariable("lodge_id") String... str) {
        System.out.println("GETLODGE1!!!");
        return lodgeService.getLodge(str[0]);
    }
}
