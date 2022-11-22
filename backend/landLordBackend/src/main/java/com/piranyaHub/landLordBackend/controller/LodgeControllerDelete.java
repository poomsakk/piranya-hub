package com.piranyaHub.landLordBackend.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

public interface LodgeControllerDelete <String> {
    @DeleteMapping("/delete/")
    String delete(String str);
}
