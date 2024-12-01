package com.cntt.rentalmanagement.domain.payload.response;

import com.cntt.rentalmanagement.domain.models.Room;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ElectricResponse {
    private Long id;
    private int month;
    private int lastMonthBlock;
    private int thisMonthBlock;
    private BigDecimal moneyEachBlock;
    private BigDecimal totalMoney;
    private boolean paid;
    private RoomResponse room;
}
