package com.piranyaHub.matchingBackend.model.subModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document

public class Cost {

    private double waterPerUnit ;
    private double electricPerUnit ;
    private double commonFee ;
    private double insurance ;

}
