import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;


  register:any | undefined;
  registerForm!: FormGroup ;
  constructor(private formBuilder: FormBuilder, private router: Router, private adminService:AdminService) { }

  ngOnInit(): void {
  
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required, Validators.minLength(4)],
			email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@")]],
			mobileNum:['',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.pattern("((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,9})") ]]
		});
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    }
    this.register ={
      'username':this.registerForm.value.username,
      'email':this.registerForm.value.email,
      'mobileNum':this.registerForm.value.mobileNum,
      'password':this.registerForm.value.password,
    }
  
      this.adminService.register(this.register).subscribe((res: any) => {
      if (res=="SUCCESS") {
        this.router.navigate(['/signin']);
      }
      else if(res=="USER_ALREADY_EXISTS") {
        alert('User already exists');
      }
    });
  }
}
