import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit { 
  
  submitted = false;
 
  signinForm !: FormGroup ;
  login: any | undefined;
  // username: any;
  
 
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService:AdminService) { }

  ngOnInit(): void {
  
    this.signinForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
  }

  get f() {
		return this.signinForm.controls;
	}

  onSubmit(){
    if (this.signinForm.invalid) 
    {
       this.submitted = true;
      return;
    }
    this.login ={
      
      'username':this.signinForm.value.username,
      'password':this.signinForm.value.password,
    }

    localStorage.setItem('USERNAME', this.signinForm.value.username);
    localStorage.setItem('PASSWORD', this.signinForm.value.password);


    this.adminService.login(this.login).subscribe(res =>
    {
      if(res=="SUCCESS")
      {       
        this.router.navigate(['/profile']);
      }
      else if(res=="FAILURE")
      {
        alert('Please Enter valid username and password');     
      } 
    });
  }
}