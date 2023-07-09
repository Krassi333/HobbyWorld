import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup=new FormGroup({

})
  ngOnInit(): void {
    username:new FormControl('',Validators.required);
    email:new FormControl('',Validators.email);
    password:new FormControl('',Validators.minLength(5));
    rePass:new FormControl('',Validators.required)
  }
}
