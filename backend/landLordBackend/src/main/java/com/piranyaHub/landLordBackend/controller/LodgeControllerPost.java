package com.piranyaHub.landLordBackend.controller;

import com.piranyaHub.landLordBackend.model.Lodge;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

public interface LodgeControllerPost <Lodge>{
    @PostMapping("/add/{userid}")
    Lodge saveLodge(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,
                    @RequestBody Lodge lodge,
                    @PathVariable("userid")
                    String userid);
}
