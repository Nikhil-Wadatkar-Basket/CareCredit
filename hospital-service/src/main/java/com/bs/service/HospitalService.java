package com.bs.service;

import java.util.List;
import java.util.Optional;

import com.bs.model.Hospital;

public interface HospitalService {

	public Hospital saveHospital(Hospital hospital);
	
	public List<Hospital> getAllHospital();
	
	public Optional<Hospital> getHospitalByID(int id);
	
	public void deleteHospitalById(int id);
	
	public Hospital updateHospitalById(int id,Hospital hospital);
	
}
