package com.bs.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Hospital {
	@Id
	private Integer hospId;
	private Integer chilHospId;
	private String hospType;
	private String hospName;
	private String hospCity;

	public Hospital() {
		// TODO Auto-generated constructor stub
	}

	public Hospital(Integer hospId, Integer chilHospId, String hospType, String hospName, String hospCity) {
		super();
		this.hospId = hospId;
		this.chilHospId = chilHospId;
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

	public Integer getChilHospId() {
		return chilHospId;
	}

	public void setChilHospId(Integer chilHospId) {
		this.chilHospId = chilHospId;
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
		return "Hospital [hospId=" + hospId + ", chilHospId=" + chilHospId + ", hospType=" + hospType + ", hospName="
				+ hospName + ", hospCity=" + hospCity + "]";
	}

}
