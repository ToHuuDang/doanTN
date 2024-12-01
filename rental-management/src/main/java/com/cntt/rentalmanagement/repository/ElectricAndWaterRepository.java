package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Electric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElectricRepository extends JpaRepository<Electric, Long>{
    List<Electric> findByRoomId(Long roomId);
}
