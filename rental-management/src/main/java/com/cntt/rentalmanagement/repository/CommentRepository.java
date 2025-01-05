package com.cntt.rentalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cntt.rentalmanagement.domain.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    void deleteByRooms_Id(Long roomId);
    void deleteByuser_Id(Long userId);
}
