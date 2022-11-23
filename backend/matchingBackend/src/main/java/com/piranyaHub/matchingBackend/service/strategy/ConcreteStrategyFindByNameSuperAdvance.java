package com.piranyaHub.matchingBackend.service.strategy;

import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.repository.LodgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class ConcreteStrategyFindByNameSuperAdvance implements FindByNameStrategy{
    private LodgeRepository lodgeRepository;

    public ConcreteStrategyFindByNameSuperAdvance(LodgeRepository lodgeRepository){
        this.lodgeRepository = lodgeRepository;
    }
    @Override
    public List<Lodge> executeData(String name) {
        List<Lodge> data = lodgeRepository.findAll();
        List<Lodge> res = new ArrayList<>();
        String inp = name.toLowerCase().replaceAll("\\s+","");
        for(int i = 0; i < data.size();i++)
        {
            if(data.get(i).getInformation().getName().replaceAll("\\s+","").contains(inp))
            {
                res.add(data.get(i));
            }
        }
        return res;
    }
}
