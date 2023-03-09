package com.bs.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bs.userservice.model.UserService;


@Repository
public interface UserRepository extends JpaRepository<UserService, Integer> {

}
