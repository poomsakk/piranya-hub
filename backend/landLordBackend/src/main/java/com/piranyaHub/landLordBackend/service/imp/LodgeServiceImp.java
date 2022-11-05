package com.piranyaHub.landLordBackend.service.imp;

import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.repository.LodgeRepository;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LodgeServiceImp implements LodgeService {
    @Autowired
    private LodgeRepository lodgeRepository;

    @Override
    public Lodge addLodge(Lodge lodge) {
        return lodgeRepository.save(lodge);
    }

    @Override
    public Lodge getLodge(String id) {
        Optional<Lodge> data = lodgeRepository.findById(id);
        return data.orElse(null);
    }

    @Override
    public List<Lodge> getAllLodge() {
        return lodgeRepository.findAll();
    }

    @Override
    public Lodge updateLodge(String id, Lodge lodge) {
        Optional<Lodge> data = lodgeRepository.findById(id);
        if(data.isPresent()){
            Lodge newLodge = data.get();
            newLodge.overWrite(lodge);
            return lodgeRepository.save(newLodge);
        }
        return null;
    }

    @Override
    public void deleteLodge(String id) {
        lodgeRepository.deleteById(id);
    }
}
