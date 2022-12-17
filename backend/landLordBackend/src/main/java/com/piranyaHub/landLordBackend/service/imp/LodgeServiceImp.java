package com.piranyaHub.landLordBackend.service.imp;

import com.piranyaHub.landLordBackend.model.Lodge;
import com.piranyaHub.landLordBackend.repository.LodgeRepository;
import com.piranyaHub.landLordBackend.service.LodgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class LodgeServiceImp implements LodgeService {
    @Autowired
    private LodgeRepository lodgeRepository;

    @Override
    public Lodge addLodge(Lodge lodge, String userid, String token) {
        Lodge data = lodgeRepository.save(lodge);
        //add lodge id in user collections
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);

        HttpEntity<String> request = new HttpEntity<String>(headers);
        RestTemplate restTemplate2 = new RestTemplate();
        String uri = "https://piranyahubauthbackend.poomsakk.com/addLodgeId/" + userid + "/" + data.getLodgeId();
        ResponseEntity<String> response = restTemplate2.exchange(uri, HttpMethod.GET, request, String.class);
        System.out.println("response here!!!!!"+response );

//        String uri2 = "http://localhost:8090/addLodgeId/" + userid + "/" + data.getLodgeId();
//        System.out.println(uri2);
//        RestTemplate restTemplate = new RestTemplate();
//        String result = restTemplate.getForObject(uri2, String.class);
//        System.out.println(result);
        return data;
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
