package com.bs.userservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import net.bytebuddy.dynamic.loading.ClassReloadingStrategy.Strategy;

@Entity
@Table (name="UserTable")
public class UserService {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userID;
	private int hospID;
	private String name;
	private Long contact;
	private int age;
	private String email;
	
	
	
	public UserService() {
		super();
	}


	public UserService(int userID, int hospID, String name, Long contact, int age, String email) {
		super();
		this.userID = userID;
		this.hospID = hospID;
		this.name = name;
		this.contact = contact;
		this.age = age;
		this.email = email;
	}
	
	
	@Override
	public String toString() {
		return "UserService [userID=" + userID + ", hospID=" + hospID + ", name=" + name + ", contact=" + contact
				+ ", age=" + age + ", email=" + email + "]";
	}


	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public int getHospID() {
		return hospID;
	}
	public void setHospID(int hospID) {
		this.hospID = hospID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
