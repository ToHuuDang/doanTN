package com.cntt.rentalmanagement.controller;

import com.cntt.rentalmanagement.domain.enums.RoomStatus;
import com.cntt.rentalmanagement.domain.payload.request.AssetRequest;
import com.cntt.rentalmanagement.domain.payload.request.RoomRequest;
import com.cntt.rentalmanagement.services.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/room")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    public ResponseEntity<?> getRoomByRentaler(@RequestParam(required = false) String title,
                                               @RequestParam Integer pageNo,
                                               @RequestParam Integer pageSize){
        return ResponseEntity.ok(roomService.getRoomByRentaler(title, pageNo, pageSize));
    }

    @GetMapping("/rent-home")
    public ResponseEntity<?> getRentOfHome(){
        return ResponseEntity.ok(roomService.getRentOfHome());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRoomById(@PathVariable Long id) {
        return ResponseEntity.ok(roomService.getRoomById(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> disableRoom(@PathVariable Long id){
        return ResponseEntity.ok(roomService.disableRoom(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRoomInfo(@PathVariable Long id, MultipartHttpServletRequest request){
return ResponseEntity.ok(roomService.updateRoomInfo(id, putRoomRequest(request)));
    }

    @PostMapping
    public ResponseEntity<?> addRoom(MultipartHttpServletRequest request) {
return ResponseEntity.ok(roomService.addNewRoom(putRoomRequest(request)));
    }


    private RoomRequest putRoomRequest(MultipartHttpServletRequest request) {
        String title = request.getParameter("title");
        String description = request.getParameter("description");
        BigDecimal price = BigDecimal.valueOf(Double.valueOf(request.getParameter("price")));
        Double latitude = Double.valueOf(request.getParameter("latitude"));
        Double longitude = Double.valueOf(request.getParameter("longitude"));
        String address = request.getParameter("address");
        Long locationId = Long.valueOf(request.getParameter("locationId"));
        Long categoryId = Long.valueOf(request.getParameter("categoryId"));
        List<AssetRequest> assets = new ArrayList<>();
        for (int i = 0; i < Integer.valueOf(request.getParameter("asset")) ; i++) {
            String assetName = request.getParameterValues("assets["+i+"][name]")[0];
            Integer assetNumber = Integer.valueOf(request.getParameterValues("assets["+i+"][number]")[0]);
            assets.add(new AssetRequest(assetName, assetNumber));
        }

        List<MultipartFile> files = request.getFiles("files");
        return new RoomRequest(title, description, price, latitude, longitude, address, locationId, categoryId, RoomStatus.ROOM_RENT, assets, files);
    }

}
