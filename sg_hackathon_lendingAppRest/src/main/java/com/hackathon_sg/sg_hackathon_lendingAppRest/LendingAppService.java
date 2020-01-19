package com.hackathon_sg.sg_hackathon_lendingAppRest;

import java.util.List;
import java.util.Map;

public interface LendingAppService {
	
	public String addUser(UserVO user);
	
	public String updateUser(UserVO user);
	
	public String deleteUser(UserVO user);
	
	public String userLogin(String userDetails);
	
	public String completeKYC(String userDetails);
	
	public List<Map<String,Object>> viewLoanDetails(String user);
	
	public String newLoanRequest(String loanDetails);
	
	public String approveLoan(String loanDetails);
	
	public boolean isKycDone(String userName);
	
	

}
