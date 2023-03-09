package com.bs.userservice;

import java.util.ArrayList;

import com.bs.userservice.model.UserService;

public class Test {
	
	public static void main(String[] args) {
		ArrayList<UserService> a=new ArrayList();
		a.add(new UserService(2, 3, "neha", 1000000L,10,"nagpure"));
		a.add(new UserService(3, 4, "neha", 1000000L,10,"nagpure"));
		a.add(new UserService(4, 3, "neha", 1000000L,10,"nagpure"));
		a.add(new UserService(5, 3, "neha", 1000000L,10,"nagpure"));
		
		a.stream().filter(m->m.getHospID()>3).forEach(m->System.out.println(m));



		
	}

}
