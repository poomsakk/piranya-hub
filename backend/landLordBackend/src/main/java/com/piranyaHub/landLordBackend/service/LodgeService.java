package com.piranyaHub.landLordBackend.service;

import com.piranyaHub.landLordBackend.model.Lodge;

import java.util.List;

public interface LodgeService {
    public Lodge addLodge(Lodge lodge, String userid);
    public Lodge getLodge(String id);
    public List<Lodge> getAllLodge();
    public Lodge updateLodge(String id,Lodge lodge);
    public void deleteLodge(String id);
}
