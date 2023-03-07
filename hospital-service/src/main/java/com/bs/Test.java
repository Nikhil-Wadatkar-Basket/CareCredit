package com.bs;

import java.util.Random;

public class Test {

	public static void main(String[] args) {
		Random random=new Random();
		int nextInt = random.nextInt(1, 900);
		
		System.out.println(nextInt);

	}

}
