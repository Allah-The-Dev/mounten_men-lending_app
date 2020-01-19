import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../models/loan-details';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanDetails = new LoanDetails();

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  checkLoanEligibility(){
    this.userService.checkEligibility(this.loanDetails).subscribe();
  }

}
