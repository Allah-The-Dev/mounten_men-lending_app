package com.hackathon_sg.sg_hackathon_lendingAppRest;

import java.util.List;
import java.util.Map;

public interface LendingAppDao {
	
	public String addUser(UserVO user);
	
	
	public String updateUser(UserVO user);
	
	
	public String deleteUser(UserVO user);
	
	
	public String userLogin(String email,String password);
	
	
	public String completeKYC(String email,String panNumber,String adharNumber);
	
	public List<Map<String,Object>> viewLoanDetails(String user);
	
	public String newLoanRequest(String user,String businessName,Integer amount);
	
	public String approveLoan(String loanDetails);
	
	public boolean isKycDone(String userName);

}
