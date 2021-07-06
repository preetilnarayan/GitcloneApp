import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: any;
  signout: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('USERNAME');
  }

  signOut() {
    this.signout = {
      'username': localStorage.getItem('USERNAME'),
      'password': localStorage.getItem('PASSWORD')
    }
    this.adminService.login(this.signout).subscribe((res: any) => {
      if(res=="SUCCESS") {
        this.router.navigate(['/signin']);
      }
        alert('Signout Successful');
    });
  }
}