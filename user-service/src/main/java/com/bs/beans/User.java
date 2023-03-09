package com.bs.beans;

import javax.persistence.*;

@Entity
@Table(name = "user_details_tab")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userID;
	private Integer hospital_ID;
	private Integer age;
	private String fullName;
	private String email;
	private String contact;
	private String username;
	private String password;
	private String role;

	public User() {
	}

	public User(Integer userID, Integer hospital_ID, Integer age, String fullName, String email, String contact,
			String username, String password, String role) {
		super();
		this.userID = userID;
		this.hospital_ID = hospital_ID;
		this.age = age;
		this.fullName = fullName;
		this.email = email;
		this.contact = contact;
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	public Integer getHospital_ID() {
		return hospital_ID;
	}

	public void setHospital_ID(Integer hospital_ID) {
		this.hospital_ID = hospital_ID;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", hospital_ID=" + hospital_ID + ", age=" + age + ", fullName=" + fullName
				+ ", email=" + email + ", contact=" + contact + ", username=" + username + ", password=" + password
				+ ", role=" + role + "]";
	}

}
