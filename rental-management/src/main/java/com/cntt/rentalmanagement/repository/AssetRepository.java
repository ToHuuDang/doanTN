package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
}
