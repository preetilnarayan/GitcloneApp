import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  submitted = false;

  PasswordresetForm!: FormGroup;
  email: any;
  forgetpassword: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService:AdminService, private activatedRoute: ActivatedRoute
) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.email = params['email'];
      console.log(this.email);
    })

    this.PasswordresetForm = this.formBuilder.group({
			email: ['', Validators.required]

  });
}

onSubmit(){
  if (this.PasswordresetForm.invalid) 
  {
     this.submitted = true;
    return;
  }
  this.forgetpassword ={
    
    'email':this.PasswordresetForm.value.username,
  }

  localStorage.setItem('EMAIL', this.PasswordresetForm.value.username);


  this.adminService.forgetpassword(this.forgetpassword).subscribe(res =>
  {
    // alert('Hello!');
    if(res=="SUCCESS")
    {       
      alert('Successful!!'); 
      this.router.navigate(['/reset-password']);
    }
    else if(res=="FAILURE")
    {
      alert('Please Enter valid email');     
    } 
  });
}
}
