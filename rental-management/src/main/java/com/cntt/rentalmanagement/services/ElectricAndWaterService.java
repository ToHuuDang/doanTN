package com.cntt.rentalmanagement.services;

import com.cntt.rentalmanagement.domain.models.Electric;
import com.cntt.rentalmanagement.domain.models.Room;
import com.cntt.rentalmanagement.domain.payload.response.ElectricResponse;

import java.util.List;

public interface ElectricService {
    public Electric saveElectric(Electric electric);
    public Electric updateElectric(Electric electric, Long id);
    public List<ElectricResponse> getElectricByRoom(Long id);
    public ElectricResponse getElectric(Long id);
}
