package com.piranyaHub.landLordBackend.repository;

import com.piranyaHub.landLordBackend.model.Lodge;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LodgeRepository extends MongoRepository<Lodge,String> {
}
