package com.bs.beans;

public class Facility {
	private Integer facilityId;
	private Integer userId;
	private String onlinePayemntFlag;
	private String transactionFlag;
	private String deviceFlag;
	private String userFlag;

	public Facility() {
		// TODO Auto-generated constructor stub
	}

	public Facility(Integer facilityId, Integer userId, String onlinePayemntFlag, String transactionFlag,
			String deviceFlag, String userFlag) {
		super();
		this.facilityId = facilityId;
		this.userId = userId;
		this.onlinePayemntFlag = onlinePayemntFlag;
		this.transactionFlag = transactionFlag;
		this.deviceFlag = deviceFlag;
		this.userFlag = userFlag;
	}

	public Integer getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(Integer facilityId) {
		this.facilityId = facilityId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getOnlinePayemntFlag() {
		return onlinePayemntFlag;
	}

	public void setOnlinePayemntFlag(String onlinePayemntFlag) {
		this.onlinePayemntFlag = onlinePayemntFlag;
	}

	public String getTransactionFlag() {
		return transactionFlag;
	}

	public void setTransactionFlag(String transactionFlag) {
		transactionFlag = transactionFlag;
	}

	public String getDeviceFlag() {
		return deviceFlag;
	}

	public void setDeviceFlag(String deviceFlag) {
		this.deviceFlag = deviceFlag;
	}

	public String getUserFlag() {
		return userFlag;
	}

	public void setUserFlag(String userFlag) {
		this.userFlag = userFlag;
	}

	@Override
	public String toString() {
		return "Facility [facilityId=" + facilityId + ", userId=" + userId + ", onlinePayemntFlag=" + onlinePayemntFlag
				+ ", TransactionFlag=" + transactionFlag + ", deviceFlag=" + deviceFlag + ", userFlag=" + userFlag
				+ "]";
	}

}
