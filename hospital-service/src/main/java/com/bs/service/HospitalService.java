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
		if (countries.getHospType().equals("HQ") || countries.getHospType().equals("SA"))
			countries.setHospId(Utility.createRandomID());
		else
			countries.setChilHospId(Utility.createRandomID());
		return hopsitalRepo.save(countries);
	}

	public Hospital updateHospital(Hospital countries) {
		Hospital updatedHospital = null;
		Hospital Saved = null;
//		Optional<Hospital> findById = countryRepo.findByCountryId(countries.getClass());
//		if (findById.isPresent()) {
//			updatedHospital = new Hospital();
////			updatedHospital.setCountryName(findById.get().getCountryName());
////			updatedHospital.setRegionId(findById.get().getRegionId());
//			Saved = countryRepo.save(updatedHospital);
//		}
		return Saved;
	}

	public Hospital getByID(Integer id) {
		return hopsitalRepo.getHospitalByHospId(id);
	}

	public String deleteHospitalByID(Integer id) {
		return hopsitalRepo.deleteHospitalByHospId(id);
	}

}
