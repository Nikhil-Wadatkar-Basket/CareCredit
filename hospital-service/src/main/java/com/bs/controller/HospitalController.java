package com.bs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bs.model.Hospital;
import com.bs.service.HospitalService;

@RestController
@RequestMapping("/hospital")
public class HospitalController {
	
	@Autowired
	private HospitalService hospitalService;
	
	@PostMapping("/save")
	public ResponseEntity<Hospital> createHospital(@RequestBody Hospital hospital)
	{
		Hospital saveHospital = hospitalService.saveHospital(hospital);
		
		return  ResponseEntity.ok().body(saveHospital);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Hospital>> getAllHospital()
	{
		List<Hospital> allHospital = hospitalService.getAllHospital();
		return ResponseEntity.ok().body(allHospital);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Optional<Hospital>> getHospitalById(@PathVariable("id") int id)
	{
		Optional<Hospital> hospitalByID = hospitalService.getHospitalByID(id);
		return ResponseEntity.ok().body(hospitalByID);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteHospitalById(@PathVariable("id") int id)
	{
		hospitalService.deleteHospitalById(id);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Hospital> updateHospitalById(@PathVariable("id") int id,@RequestBody Hospital hospital)
	{
		Hospital updateHospitalById = hospitalService.updateHospitalById(id, hospital);
		 return ResponseEntity.ok().body(updateHospitalById);
	}

}
