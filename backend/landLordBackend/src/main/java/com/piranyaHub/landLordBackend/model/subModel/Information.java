package com.piranyaHub.landLordBackend.model.subModel;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor

public class Information {
    private String name;
    private String nameEng;
    private String houseNumber;
    private String street;
    private String soi;
    private String subArea;
    private String area;
    private String city;
    private String postalCode;
}
