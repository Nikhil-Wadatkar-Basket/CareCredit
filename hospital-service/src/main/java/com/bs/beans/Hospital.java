package com.bs.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Hospital {
	@Id
	private Integer hospId;
	private String hospType;
	private String hospName;
	private String hospCity;

	public Hospital() {
		// TODO Auto-generated constructor stub
	}

	public Hospital(Integer hospId, String hospType, String hospName, String hospCity) {
		super();
		this.hospId = hospId;
		this.hospType = hospType;
		this.hospName = hospName;
		this.hospCity = hospCity;
	}

	public Integer getHospId() {
		return hospId;
	}

	public void setHospId(Integer hospId) {
		this.hospId = hospId;
	}

	public String getHospType() {
		return hospType;
	}

	public void setHospType(String hospType) {
		this.hospType = hospType;
	}

	public String getHospName() {
		return hospName;
	}

	public void setHospName(String hospName) {
		this.hospName = hospName;
	}

	public String getHospCity() {
		return hospCity;
	}

	public void setHospCity(String hospCity) {
		this.hospCity = hospCity;
	}

	@Override
	public String toString() {
		return "Hospital [hospId=" + hospId + ", hospType=" + hospType + ", hospName=" + hospName + ", hospCity="
				+ hospCity + "]";
	}

}
