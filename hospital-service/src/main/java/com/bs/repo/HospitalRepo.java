package com.bs.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bs.beans.Hospital;
@Repository
public interface HospitalRepo extends JpaRepository<Hospital, Integer>{

	Hospital getHospitalByHospId(Integer id);

	String deleteHospitalByHospId(Integer id);

}
