package com.piranyaHub.matchingBackend.controller;

import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.model.ReqBody;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin
public interface MatchingControllerPost<Lodge> {

    @PostMapping("/filter")
    Lodge filter(@RequestBody ReqBody reqBody);
}
