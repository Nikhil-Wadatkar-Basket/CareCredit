package com.bs.userservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bs.userservice.model.UserService;
import com.bs.userservice.repository.UserRepository;
import com.bs.userservice.service.UserServiceServices;

@RestController

@RequestMapping("/UserService")
public class UserController {
	@Autowired
	private UserServiceServices userServiceS;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/save")
	public ResponseEntity<UserService> createUserService(@RequestBody UserService userService)
	{
		UserService saveUserService = userServiceS.saveUserService(userService);
		
		return  ResponseEntity.ok().body(saveUserService);
	}
	
	@GetMapping("/getalluser")
	public ResponseEntity<List<UserService>> getAllUser()
	{
		List<UserService> allUserService = userServiceS.getAllUserService();
		return ResponseEntity.ok().body(allUserService);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Optional<UserService>>  getUserById(@PathVariable("id") int id)
	{
		Optional<UserService> userByID = userServiceS.getUserByID(id);
		return ResponseEntity.ok().body(userByID);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable("id") int id)
	{
		 userServiceS.deleteUser(id);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<UserService> updateUserById(@PathVariable("id") int id,@RequestBody UserService userService)
	{
		 UserService updateUserById = userServiceS.updateUserById(id, userService);
		 return ResponseEntity.ok().body(updateUserById);
	}
	
	

}
