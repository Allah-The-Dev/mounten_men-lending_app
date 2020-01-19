package com.hackathon_sg.sg_hackathon_lendingAppRest;



import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping(path="/")
public class LendingAppController {
	
	@Autowired
	LendingAppServiceImpl lendService;
	
	
	
	@PostMapping(path="user/")
	public ResponseEntity<String> addUser(@RequestBody UserVO user){
		
		ResponseEntity<String> resp=null;
		String res=lendService.addUser(user);
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("User Aded successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>("User already present",HttpStatus.UNAUTHORIZED);
		}
		return resp;
		}
	
	
	
	
	@PutMapping(path="user/")
	public ResponseEntity<String> updateUser(UserVO user){
		
		ResponseEntity<String> resp=null;
		String res=lendService.updateUser(user);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("User updated successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>("Cannot update the User",HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
		
	}
	
	
	
	
	@DeleteMapping(path="user/")
	public ResponseEntity<String> deleteUser(UserVO user){
		
		ResponseEntity<String> resp=null;
		String res=lendService.deleteUser(user);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("User deleted successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>("Cannot delete the User",HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
		
	}
	
	
	
	@PostMapping(path="user/login")
	public ResponseEntity<String> userLogin(@RequestBody String userdetails){
		
		ResponseEntity<String> resp=null;
		String res=lendService.userLogin(userdetails);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("User logged in successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>(res,HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
		
	}
	
	
	
	@PostMapping(path="user/KYC")
	public ResponseEntity<String> completeKYC(@RequestBody String userDetails){
		
		
		
		ResponseEntity<String> resp=null;
		String res=lendService.completeKYC(userDetails);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("KYC completed successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>(res,HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
	}
	
	
	@PostMapping(path="user/viewloan")
	public List<Map<String,Object>> viewLoanDetails(@RequestBody String user){
		return lendService.viewLoanDetails(user);
	}
	
	
	@PostMapping(path="user/createloan")
	public ResponseEntity<String> newLoanRequest(@RequestBody String loanDetails){
		ResponseEntity<String> resp=null;
		String res=lendService.newLoanRequest(loanDetails);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("Loan request Created successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>(res,HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
	}
	@PostMapping(path="user/approveloan")
	public ResponseEntity<String> approveLoan(@RequestBody String loanDetails){
		ResponseEntity<String> resp=null;
		String res=lendService.approveLoan(loanDetails);
		
		if(res.equalsIgnoreCase("success")) {
			resp= new ResponseEntity<String>("Loan request Created successfully",HttpStatus.OK);}
		else {
			resp= new ResponseEntity<String>(res,HttpStatus.UNAUTHORIZED);
		}
		
		return resp;
	}
	
	@GetMapping("/user/isKycDone/{userName}")
	public ResponseEntity<Boolean> isKycDoneForUser(@PathVariable String userName){
		return ResponseEntity.ok().body(lendService.isKycDone(userName));
	}

	
	
	
	

}

