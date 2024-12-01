package com.cntt.rentalmanagement.services.impl;

import com.cntt.rentalmanagement.domain.models.Electric;
import com.cntt.rentalmanagement.domain.payload.response.ElectricResponse;
import com.cntt.rentalmanagement.repository.ElectricRepository;
import com.cntt.rentalmanagement.services.ElectricService;
import com.cntt.rentalmanagement.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ElectricServiceImpl implements ElectricService {
    @Autowired
    private ElectricRepository electricRepository;
    @Autowired
    private RoomService roomService;

    @Override
    public Electric saveElectric(Electric electric) {
        electric.setPaid(false);
        int deviatedBlock = electric.getThisMonthBlock() - electric.getLastMonthBlock();
        BigDecimal totalMoney = deviatedBlock > 0 ? electric.getMoneyEachBlock().multiply(BigDecimal.valueOf(deviatedBlock)) : BigDecimal.ZERO;
        electric.setTotalMoney(totalMoney);
        return electricRepository.save(electric);
    }

    @Override
    public Electric updateElectric(Electric electric, Long id) {
        return electricRepository.findById(id)
            .map(electric1 -> {
                int deviatedBlock = electric.getThisMonthBlock() - electric.getLastMonthBlock();
                BigDecimal totalMoney = deviatedBlock > 0 ? electric.getMoneyEachBlock().multiply(BigDecimal.valueOf(deviatedBlock)) : BigDecimal.ZERO;

                electric1.setRoom(electric.getRoom());
                electric1.setMonth(electric.getMonth());
                electric1.setLastMonthBlock(electric.getLastMonthBlock());
                electric1.setThisMonthBlock(electric.getThisMonthBlock());
                electric1.setMoneyEachBlock(electric.getMoneyEachBlock());
                electric1.setTotalMoney(totalMoney);
                electric1.setPaid(electric.isPaid());
                return electricRepository.save(electric1);
            })
            .orElseThrow(() -> new RuntimeException("Electric not found with id " + id));
    }

    @Override
    public List<ElectricResponse> getElectricByRoom(Long id) {
        return electricRepository.findByRoomId(id).stream().map(electric -> {
            ElectricResponse electricResponse = new ElectricResponse();
            electricResponse.setId(electric.getId());
            electricResponse.setMonth(electric.getMonth());
            electricResponse.setLastMonthBlock(electric.getLastMonthBlock());
            electricResponse.setThisMonthBlock(electric.getThisMonthBlock());
            electricResponse.setMoneyEachBlock(electric.getMoneyEachBlock());
            electricResponse.setTotalMoney(electric.getTotalMoney());
            electricResponse.setRoom(roomService.getRoomById(electric.getRoom().getId()));
            electricResponse.setPaid(electric.isPaid());
            return electricResponse;
        }).toList();
    }

    @Override
    public ElectricResponse getElectric(Long id) {
        return electricRepository.findById(id)
            .map(electric -> {
                ElectricResponse electricResponse = new ElectricResponse();
                electricResponse.setId(electric.getId());
                electricResponse.setMonth(electric.getMonth());
                electricResponse.setLastMonthBlock(electric.getLastMonthBlock());
                electricResponse.setThisMonthBlock(electric.getThisMonthBlock());
                electricResponse.setMoneyEachBlock(electric.getMoneyEachBlock());
                electricResponse.setTotalMoney(electric.getTotalMoney());
                electricResponse.setRoom(roomService.getRoomById(electric.getRoom().getId()));
                electricResponse.setPaid(electric.isPaid());
                return electricResponse;
            })
            .orElseThrow(() -> new RuntimeException("Electric not found with id " + id));
    }
}
