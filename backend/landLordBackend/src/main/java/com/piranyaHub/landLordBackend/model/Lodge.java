package com.piranyaHub.landLordBackend.model;

import com.piranyaHub.landLordBackend.model.subModel.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "lodge")
public class Lodge {
    @Id
    private String lodgeId;
    private Information information;
    private Facility facility;
    private List<RoomType> roomType;
    private Cost cost;
    private Detail detail;
    private ImagePath imagePath;
    private Promotion promotion;
    private Contact contact;

    public void overWrite(Lodge lodge){
        information = lodge.getInformation();
        facility = lodge.getFacility();
        roomType = lodge.getRoomType();
        cost = lodge.getCost();
        detail = lodge.getDetail();
        imagePath = lodge.getImagePath();
        promotion = lodge.getPromotion();
        contact = lodge.getContact();
    }
}
