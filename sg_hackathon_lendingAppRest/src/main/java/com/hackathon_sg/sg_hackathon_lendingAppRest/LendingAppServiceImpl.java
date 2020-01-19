package com.hackathon_sg.sg_hackathon_lendingAppRest;


import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LendingAppServiceImpl implements LendingAppService {

	@Autowired
	LendingAppDaoImpl lendingdao;
	
	@Override
	public String addUser(UserVO user) {
		// TODO Auto-generated method stub
		String res=lendingdao.addUser(user);
		
		
		return res;
	}

	@Override
	public String updateUser(UserVO user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteUser(UserVO user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String userLogin(String userDetails) {
		JSONObject userDetailsJson=new JSONObject(userDetails);
		String email="";
		String password="";
		if(userDetailsJson.has("email")) {
			email=userDetailsJson.get("email").toString();
		}
		if(userDetailsJson.has("password")) {
			password=userDetailsJson.get("password").toString();
		}
		
		
		return lendingdao.userLogin(email, password);

	}

	@Override
	public String completeKYC(String userDetails) {
		
		JSONObject userDetailsJson=new JSONObject(userDetails);
		String adharNumber="";
		String panNumber="";
		String email="";
		if(userDetailsJson.has("email")) {
			email=userDetailsJson.get("email").toString();
		}
		if(userDetailsJson.has("panNumber")) {
			panNumber=userDetailsJson.get("panNumber").toString();
		}
		if(userDetailsJson.has("adharNUmber")) {
			adharNumber=userDetailsJson.get("adharNUmber").toString();
		}
		
		return lendingdao.completeKYC(email, panNumber, adharNumber);
	}

	
	@Override
	public List<Map<String,Object>> viewLoanDetails(String user) {
		// TODO Auto-generated method stub
		
		return lendingdao.viewLoanDetails(user);
	}

	@Override
	public String newLoanRequest(String loanDetails) {
	
		JSONObject loanDetailsJson=new JSONObject(loanDetails);
		String userName="";
		String businessName="";
		Integer loanAmount=0;
		
		
		if(loanDetailsJson.has("businessName")) {
			businessName=loanDetailsJson.get("businessName").toString();
			System.out.println(businessName);
		}
		if(loanDetailsJson.has("user")) {
			userName=loanDetailsJson.get("user").toString();
			System.out.println(userName);
		}
		if(loanDetailsJson.has("amount")) {
			loanAmount=Integer.parseInt(loanDetailsJson.get("amount").toString());
			System.out.println("this is in service");
			System.out.println(loanAmount);
		}
		
		return lendingdao.newLoanRequest(userName, businessName, loanAmount);
	}

	@Override
	public String approveLoan(String loanDetails) {
		// TODO Auto-generated method stub
		
		return lendingdao.approveLoan(loanDetails);
	}
	
	public boolean isKycDone(String userName) {
		return lendingdao.isKycDone(userName);
	}
}
