package com.bs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bs.beans.User;
import com.bs.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/gett")
	public User gett() {
		return new User();
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<User>> getAllUser() throws InterruptedException {
		return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
	}

	@PostMapping("/createUser")
	public ResponseEntity<User> createUser(@RequestBody User countries) {
		//validation
		return new ResponseEntity<User>(userService.createUser(countries), HttpStatus.OK);
	}

	@PostMapping("/updateUser")
	public ResponseEntity<User> updateUser(@RequestBody User countries) {
		return new ResponseEntity<User>(userService.updateUser(countries), HttpStatus.OK);
	}

	@GetMapping("/getByID/{id}")
	public ResponseEntity<User> getByID(@PathVariable("id") Integer id) {
		return new ResponseEntity<User>(userService.getByID(id), HttpStatus.OK);
	}

	@GetMapping("/deleteByID/{id}")
	public ResponseEntity<String> deleteByID(@PathVariable("id") Integer id) {
		return new ResponseEntity<String>(userService.deleteUserByID(id), HttpStatus.OK);
	}
}