package com.piranyaHub.matchingBackend.model.subModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document

public class RoomType {
    private String typeName ;
    private double size;
    private double pricePerMonth;
    private double pricePerDay;
    private boolean available;
}
