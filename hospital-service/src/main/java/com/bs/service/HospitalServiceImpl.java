package com.bs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bs.model.Hospital;
import com.bs.repository.HospitalRepository;
@Service
public class HospitalServiceImpl implements HospitalService{

	@Autowired
	private HospitalRepository hospitalRepository;

	@Override
	public Hospital saveHospital(Hospital hospital) {
		// TODO Auto-generated method stub

		return hospitalRepository.save(hospital);
	}

	@Override
	public List<Hospital> getAllHospital() {
		// TODO Auto-generated method stub

		return hospitalRepository.findAll();
	}

	@Override
	public Optional<Hospital> getHospitalByID(int id) {
		// TODO Auto-generated method stub
		
		
		return hospitalRepository.findById(id);
	}

	@Override
	public void deleteHospitalById(int id) {
		// TODO Auto-generated method stub
		
		hospitalRepository.deleteById(id);
		
	}

	@Override
	public Hospital updateHospitalById(int id, Hospital newHospital) {
		// TODO Auto-generated method stub
		Hospital avalHospital = hospitalRepository.findById(id).get();
		if(avalHospital!=null)
		{
			if(newHospital.getHospName()!= null)
			{
				avalHospital.setHospName(newHospital.getHospName());
			}
			if(newHospital.getHospCity()!=null)
			{
				avalHospital.setHospCity(newHospital.getHospCity());
			}
			if(newHospital.getHospType()!=null)
			{
				avalHospital.setHospType(newHospital.getHospType());
			}
			
		}
		return avalHospital;
	}

}
