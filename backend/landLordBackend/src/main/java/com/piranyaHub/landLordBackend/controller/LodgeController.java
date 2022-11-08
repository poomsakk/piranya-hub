package com.piranyaHub.landLordBackend.controller;

import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
//@CrossOrigin(origins = "http://localhost:3000/")     accept only this origin
public class LodgeController {
    @Autowired
    private LodgeService lodgeService;

    @PostMapping("/add/{userid}")
    public Lodge saveLodge(@RequestBody Lodge lodge,@PathVariable("userid") String userid) {
        return lodgeService.addLodge(lodge,userid);
    }

    @GetMapping("/get/{lodge_id}")
    public Lodge getLodge(@PathVariable("lodge_id") String id){
        return lodgeService.getLodge(id);
    }

    @GetMapping("/list")
    public List<Lodge> getLodges() {
        return lodgeService.getAllLodge();
    }

    @PutMapping("/update/{lodge_id}")
    public Lodge updateLodge(@RequestBody Lodge lodge, @PathVariable("lodge_id") String id){
        return lodgeService.updateLodge(id,lodge);
    }

    @DeleteMapping("/delete/{lodge_id}")
    public String deleteUser(@PathVariable("lodge_id") String id) {
        lodgeService.deleteLodge(id);
        return "deleted succesfully... (Maybe)";
    }
}
