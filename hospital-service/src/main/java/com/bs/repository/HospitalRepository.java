package com.bs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bs.model.Hospital;
@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer>{

}
