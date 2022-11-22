package com.piranyaHub.landLordBackend.controller.imp;

import com.piranyaHub.landLordBackend.controller.LodgeControllerDelete;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lodge")
@CrossOrigin //accept all origin
public class DeleteUser implements LodgeControllerDelete<String> {
    @Autowired
    private LodgeService lodgeService;

    @Override
    @DeleteMapping("/delete/{lodge_id}")
    public String delete(@PathVariable("lodge_id") String str) {
        lodgeService.deleteLodge(str);
        String uri = "http://localhost:8090/deleteLodgeId/" + str ;
        return "deleted succesfully... (Maybe)";
    }
}
