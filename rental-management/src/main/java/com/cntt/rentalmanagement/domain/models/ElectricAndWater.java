package com.cntt.rentalmanagement.domain.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "electric")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Electric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int month;
    private int lastMonthBlock;
    private int thisMonthBlock;
    private BigDecimal moneyEachBlock;
    private BigDecimal totalMoney;
    private boolean paid;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
