package com.cntt.rentalmanagement.controller;

import com.cntt.rentalmanagement.services.RequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/request")
@RequiredArgsConstructor
public class RequestController {

    private final RequestService requestService;

    @GetMapping
    public ResponseEntity<?> getRequestOfRentHome(@RequestParam String keyword,
                                                  @RequestParam Integer pageNo,
                                                  @RequestParam Integer pageSize){
        return ResponseEntity.ok(requestService.getRequestOfRentHome(keyword, pageNo, pageSize));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getRequestById(@PathVariable Long id) {
        return ResponseEntity.ok(requestService.getRequest(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> changeStatus(@PathVariable Long id) {
        return ResponseEntity.ok(requestService.changeStatusOfRequest(id));
    }
}
