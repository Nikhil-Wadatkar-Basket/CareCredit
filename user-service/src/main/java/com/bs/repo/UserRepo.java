package com.bs.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bs.beans.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	User getUserByUserID(Integer id);

	String deleteUserByUserID(Integer id);

}