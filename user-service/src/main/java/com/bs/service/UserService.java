package com.bs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bs.beans.Facility;
import com.bs.beans.User;
import com.bs.constants.CommonConstants;
import com.bs.repo.UserRepo;
import com.bs.util.Utility;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
//	@Autowired
//	private RestTemplate restTemplate;

	public List<User> getAllUsers() {
		List<User> allcountries = userRepo.findAll();
		return allcountries;
	}

	public User createUser(User countries) {
//		countries.setUserID(Utility.createRandomID());
		// setting default role to user
		countries.setRole(CommonConstants.USER);
		// call facility service to make all facilities disabled
//		http://localhost:8282/setDefaultFacility/{id}
//		restTemplate.getForEntity("http://localhost:8282/gett", Facility.class);
		return userRepo.save(countries);
	}

	public User updateUser(User countries) {
		User updatedUser = null;
		User Saved = null;
		return Saved;
	}

	public User getByID(Integer id) {
		return userRepo.getUserByUserID(id);
	}

	public String deleteUserByID(Integer id) {
		return userRepo.deleteUserByUserID(id);
	}

}
