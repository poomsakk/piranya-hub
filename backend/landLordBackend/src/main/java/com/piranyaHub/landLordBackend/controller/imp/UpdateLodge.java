package com.piranyaHub.landLordBackend.controller.imp;

import com.piranyaHub.landLordBackend.controller.LodgeControllerPut;
import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
public class UpdateLodge implements LodgeControllerPut<Lodge> {
    @Autowired
    private LodgeService lodgeService;

    @Override
    @PutMapping("/update/{lodge_id}")
    public Lodge updateLodge(@RequestBody Lodge lodge, @PathVariable("lodge_id") String str){
        return lodgeService.updateLodge(str, lodge);
    }
}
