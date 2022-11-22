package com.piranyaHub.landLordBackend.controller.imp;

import com.piranyaHub.landLordBackend.controller.LodgeControllerPost;
import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
public class SaveLodge implements LodgeControllerPost <Lodge> {
    @Autowired
    private LodgeService lodgeService;

    @Override
    @PostMapping("/add/{userid}")
    public Lodge saveLodge(String token, Lodge lodge, String userid) {
        return lodgeService.addLodge(lodge,userid,token);
    }
}
