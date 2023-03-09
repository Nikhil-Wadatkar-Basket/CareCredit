package com.bs.userservice.service;

import java.util.List;
import java.util.Optional;

import com.bs.userservice.model.UserService;

public interface UserServiceServices {
	
	public UserService saveUserService(UserService userService);
	
	public List<UserService> getAllUserService();
	
	public Optional<UserService> getUserByID(int id);
	
	public void deleteUser(int id);
	
	public UserService updateUserById(int id,UserService userServise);
	

}
