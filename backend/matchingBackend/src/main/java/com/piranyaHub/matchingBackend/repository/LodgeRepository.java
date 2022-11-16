package com.piranyaHub.matchingBackend.repository;

import com.piranyaHub.matchingBackend.model.Lodge;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface LodgeRepository extends MongoRepository<Lodge,String> {

}
