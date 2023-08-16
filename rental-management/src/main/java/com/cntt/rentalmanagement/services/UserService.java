package com.cntt.rentalmanagement.services;

import java.util.List;

import com.cntt.rentalmanagement.domain.models.Message;
import com.cntt.rentalmanagement.domain.models.User;
import com.cntt.rentalmanagement.domain.models.DTO.MessageDTO;

public interface UserService {

	String updateImageUser(Long id, String image);

	String updateUser(User user);

	List<MessageDTO> getMessageUser(Long id);

	MessageDTO toMessageDTO(User user, Message message);
}
