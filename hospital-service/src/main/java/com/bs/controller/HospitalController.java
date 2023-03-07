package com.bs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bs.beans.Hospital;
import com.bs.service.HospitalService;

@RestController
public class HospitalController {
	@Autowired
	private HospitalService hospitalService;

	@GetMapping("/gett")
	public Hospital gett() {

		return new Hospital();
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Hospital>> getAllHospital() throws InterruptedException {
		return new ResponseEntity<List<Hospital>>(hospitalService.getAllHospitals(), HttpStatus.OK);
	}

	@PostMapping("/createHospital")
	public ResponseEntity<Hospital> createHospital(@RequestBody Hospital countries) {
		return new ResponseEntity<Hospital>(hospitalService.createHospital(countries), HttpStatus.OK);
	}

	@PostMapping("/updateHospital")
	public ResponseEntity<Hospital> updateHospital(@RequestBody Hospital countries) {
		return new ResponseEntity<Hospital>(hospitalService.updateHospital(countries), HttpStatus.OK);
	}

	@GetMapping("/getByID/{id}")
	public ResponseEntity<Hospital> getByID(@PathVariable("id") Integer id) {
		return new ResponseEntity<Hospital>(hospitalService.getByID(id), HttpStatus.OK);
	}

	@GetMapping("/deleteByID/{id}")
	public ResponseEntity<String> deleteByID(@PathVariable("id") Integer id) {
		return new ResponseEntity<String>(hospitalService.deleteHospitalByID(id), HttpStatus.OK);
	}
}