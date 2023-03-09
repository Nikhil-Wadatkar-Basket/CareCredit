package com.bs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hospital {
		@Id
		@GeneratedValue(strategy =GenerationType.IDENTITY)
		private int hospId;
		private String hospType;
		@Column
		private String hospName;
		@Column
		private String hospCity;
		
		public Hospital() {
			super();
		}

		public Hospital(int hospId, String hospType, String hospName, String hospCity) {
			super();
			this.hospId = hospId;
			this.hospType = hospType;
			this.hospName = hospName;
			this.hospCity = hospCity;
		}

		public int getHospId() {
			return hospId;
		}

		public void setHospId(int hospId) {
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
