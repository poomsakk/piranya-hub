package com.piranyaHub.matchingBackend.service.imp;

import com.piranyaHub.matchingBackend.model.Lodge;
import com.piranyaHub.matchingBackend.repository.LodgeRepository;
import com.piranyaHub.matchingBackend.service.MathchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MatchingServiveImp implements MathchingService {
    @Autowired
    private LodgeRepository lodgeRepository;
    @Override
    public List<Lodge> findByName(String name) {
        List<Lodge> data = lodgeRepository.findAll();
        //System.out.println("========= findbyname =========");
        List<Lodge> res = new ArrayList<>();
        for (int i = 0; i < data.size(); i++) {
            if(data.get(i).getInformation().getName().toLowerCase().indexOf(name.toLowerCase()) != -1) {
                //System.out.printf(i + " : " + data.get(i).getLodgeId() + ", " + data.get(i).getInformation().getName() + "\n");
                res.add(data.get(i));
            }
        }
        return res;
    }

    @Override
    public Lodge findById(String id) {
        Optional<Lodge> data = lodgeRepository.findById(id);
        return data.orElse(null);
    }

    @Override
    public List<Lodge> filter(List<String> facilitiesInput, Double radiusFromMid, Double minCostPerMonth, Double maxCostPerMonth) {
        final double KmitlLat = 13.7298889;
        final double KmitlLng = 100.7782323;
        final double R = 6371;
        List<Lodge> data = lodgeRepository.findAll();
        List<Lodge> res = new ArrayList<>();

        int checker;
        for(int i = 0; i < data.size();i++)
        {
            if(facilitiesInput.size() == 0)
            {
                res.add(data.get(i));
            }
            checker = 0;
            for (int j = 0; j < facilitiesInput.size(); j++)
            {
                if(data.get(i).getFacility().getFacilities().size() < facilitiesInput.size())
                {
                    break;
                }
                else
                {
                    for (String element : data.get(i).getFacility().getFacilities()) {
                        if (element.equals(facilitiesInput.get(j))) {
                            checker++;
                        }
                    }
                }
                if (checker == facilitiesInput.size())
                {
                    res.add(data.get(i));
                }
            }
        }

        List<Lodge> res2 = new ArrayList<>();
        for(int i = 0; i < res.size();i++)
        {
            for (int j = 0; j < res.get(i).getRoomType().size(); j++) {
                if(res.get(i).getRoomType().get(j).getPricePerMonth() <= maxCostPerMonth && res.get(i).getRoomType().get(j).getPricePerMonth() >= minCostPerMonth){
                    res2.add(res.get(i));
                    break;
                }
            }
        }

        List<Lodge> res3 = new ArrayList<>();
        for(int i = 0; i < res2.size();i++)
        {
            double latDistance = Math.toRadians(res2.get(i).getInformation().getLat() - KmitlLat);
            double lonDistance = Math.toRadians(res2.get(i).getInformation().getLng() - KmitlLng);
            double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                    + Math.cos(Math.toRadians(KmitlLat)) * Math.cos(Math.toRadians(res2.get(i).getInformation().getLat()))
                    * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
            double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            double distance = R * c * 1000; // convert to meters

            /*double height = el1 - el2;*/

            distance = Math.pow(distance, 2); /*+ Math.pow(height, 2);*/
            double ans = Math.sqrt(distance);
            if(ans <= radiusFromMid)
            {
                res3.add(res2.get(i));
            }
        }

        return res3;
    }

    @Override
    public List<Lodge> findByFome(String name) {
        List<Lodge> data = lodgeRepository.findAll();
        List<Lodge> res = new ArrayList<>();
        String inp = name.toLowerCase().replaceAll("\\s+","");
        for(int i = 0; i < data.size();i++)
        {
            if(data.get(i).getInformation().getName().toLowerCase().replaceAll("\\s+","").contains(inp))
            {
                res.add(data.get(i));
            }
        }
        return res;
    }
}
