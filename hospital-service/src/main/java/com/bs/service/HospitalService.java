package com.bs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bs.beans.Hospital;
import com.bs.repo.HospitalRepo;
import com.bs.util.Utility;

@Service
public class HospitalService {
	@Autowired
	private HospitalRepo hopsitalRepo;

	public List<Hospital> getAllHospitals() {
		List<Hospital> allcountries = hopsitalRepo.findAll();
		return allcountries;
	}

	public Hospital createHospital(Hospital countries) {
//		countries.setHospId(Utility.createRandomID());
		return hopsitalRepo.save(countries);
	}

	public Hospital updateHospital(Hospital countries) {
		Hospital updatedHospital = null;
		Hospital Saved = null;
		return Saved;
	}

	public Hospital getByID(Integer id) {
		return hopsitalRepo.getHospitalByHospId(id);
	}

	public String deleteHospitalByID(Integer id) {
		return hopsitalRepo.deleteHospitalByHospId(id);
	}

}
