package com.hackathon_sg.sg_hackathon_lendingAppRest;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LendingAppDaoImpl implements LendingAppDao {
 NamedParameterJdbcTemplate template;
	
	public LendingAppDaoImpl(NamedParameterJdbcTemplate template) {
		this.template=template;
	}

	@Override
	public String addUser(UserVO user) {
		// TODO Auto-generated method stub
		
		String checkuserQuery="select count(*) from loan_app_user_details where email=:email";
		
		String addUserQuery="insert into loan_app_user_details values(:userName,:email,:contact_no,:dob::timestamp,:password)";
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("userName",user.getUserName());
		pMap.put("email",user.getEmail());
		pMap.put("dob",user.getDob());
		pMap.put("password",user.getPassword());
		pMap.put("email",user.getEmail());
		pMap.put("contact_no",user.getContact_no());
		Integer userchek=this.template.queryForObject(checkuserQuery, pMap,Integer.class);
		if(userchek>0) {
			return "User already Exist with given email";
		}
		Integer res=this.template.update(addUserQuery,pMap);
		
		if (res>0) {
			return "success";
		}
		
		
		
		
		
		

		return "not success";
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
	public String userLogin(String email, String password) {
		// TODO Auto-generated method stub
		System.out.println(email);
		email=email.toLowerCase();
		System.out.println(email);
		String verifyUserExistQuery="select count(*) from  loan_app_user_details where lower(email)=:email";
		String checkValiduserCredentials="select count(*) from loan_app_user_details where lower(email)=:email and password=:password";
		
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("email",email);
		pMap.put("password",password);
		int checkres=this.template.queryForObject(verifyUserExistQuery, pMap,Integer.class);
		System.out.println(checkres);
		if((checkres<=0)) {
			return "User Does not Exist";
			
		}
		int checkCred=this.template.queryForObject(checkValiduserCredentials, pMap,Integer.class);
		
		if(!(checkCred>0)) {
			return "Invalid credentials";
			
		}
		
		
		
		
		return "success";
	}

	@Override
	public String completeKYC(String email, String panNumber, String adharNumber) {
		// TODO Auto-generated method stub
		email=email.toLowerCase();
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("email",email);
		
		String getUserDetailsQuery="select username from loan_app_user_details where lower(email)=:email";
		String userName=this.template.queryForObject(getUserDetailsQuery, pMap,String.class);
		pMap.put("userName",userName);
		pMap.put("panNumber",panNumber);
		pMap.put("adharNumber",adharNumber);
		String insertKYCDetails="insert into kyc_details values(:userName,:email,:panNumber,:adharNumber)";
		int res=this.template.update(insertKYCDetails, pMap);
		if(res>0) {
			return "success";
		}
		
		return "could not complete KYC";
	}

	@Override
	public List<Map<String,Object>> viewLoanDetails(String user) {
		// TODO Auto-generated method stub
		user=user.toLowerCase();
		String getLoanDetails="select loan_id,business_name,total_amount,remaining_amount,status from user_loan_details where lower(email)=:email";
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("email",user);
		
		
		return this.template.queryForList(getLoanDetails, pMap);
	}

	@Override
	public String newLoanRequest(String user,String businessName,Integer amount) {
		System.out.println(amount);
		// TODO Auto-generated method stub
		String createNewLoanReqQuery="insert into user_loan_details(email,business_name,total_amount,remaining_amount,applied_at,status)"
				+ "values(:user,:businessName,:amount,:amount,:applied_at,:status)";
		Date date= new Date();
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("user", user);
		pMap.put("businessName", businessName);
		pMap.put("amount", amount);
		pMap.put("applied_at", date);
		pMap.put("status","Applied");
		
		
		
		int res=0;
		
		if(user!=null && businessName!=null ) {
			 res=this.template.update(createNewLoanReqQuery, pMap);
			
		}
		
		if(res<=0) {
			return "Could not create New Loan request";		}
		return "success";
	}

	@Override
	public String approveLoan(String loanDetails) {
		// TODO Auto-generated method stub
		Integer loanId= Integer.parseInt(loanDetails);
		String approveLoanQuery="update user_loan_details set status='Approved' where loan_id=:loan_id";
		Map<String,Object> pMap = new HashMap<String, Object>();
		pMap.put("loan_id",loanId);
		int res=this.template.update(approveLoanQuery, pMap);
		if(res<=0) {
			return "Could Not Approve the Loan";
		}
		
		return "success";
	}

	public boolean isKycDone(String userName) {
		Map<String,String> pMap = new HashMap<>();
		pMap.put("userName",userName);
		String queryForCheckingUserKyc = "select count(*) as no from kyc_details where username=:userName";
		int res = this.template.queryForObject(queryForCheckingUserKyc, pMap, Integer.class);
		return res > 0;
	}
	
	
	
	
	
	
	
	
	

	}
	


