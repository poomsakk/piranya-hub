package com.piranyaHub.landLordBackend.controller;

import com.piranyaHub.landLordBackend.model.Lodge;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface LodgeControllerPut<Lodge> {
    @PutMapping("/update/{lodge_id}")
    public Lodge updateLodge(Lodge lodge,String id);
}
