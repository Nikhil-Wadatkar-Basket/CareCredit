package com.bs.userservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bs.userservice.model.UserService;
import com.bs.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserServiceServices {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserService saveUserService(UserService userService) {
		// TODO Auto-generated method stub

		return userRepository.save(userService);
	}

	@Override
	public List<UserService> getAllUserService() {
		// TODO Auto-generated method stub

		return userRepository.findAll();
	}

	@Override
	public Optional<UserService> getUserByID(int id) {
		// TODO Auto-generated method stub
		
		
		return userRepository.findById(id);
	}

	@Override
	public void deleteUser(int id) {
		// TODO Auto-generated method stub
		
		userRepository.deleteById(id);
		
	}

	@Override
	public UserService updateUserById(int id, UserService newUser) {
		// TODO Auto-generated method stub
		UserService avalUser = userRepository.findById(id).get();
		if(avalUser!=null)
		{
			if(newUser.getName()!=null)
			{
				avalUser.setName(newUser.getName());
			}
			if(newUser.getContact()!=null)
			{
				avalUser.setContact(newUser.getContact());
			}
			if(newUser.getAge()!=0)
			{
				avalUser.setAge(newUser.getAge());
			}
			
		}
		return avalUser;
	}

}
