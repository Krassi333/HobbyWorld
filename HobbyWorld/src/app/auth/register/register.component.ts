import { Component, ContentChildren, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(5)]),
    email: new FormControl('',
      [Validators.required,
      Validators.email]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(6)]),
    rePass: new FormControl('', [Validators.required])

  })

  ngOnInit(): void { }

  constructor(private authService: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar) { }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.registerForm.reset();
        this.router.navigate(['/']);
      },
      (err: any) => {
        const errorMessage = "Register failed - " + err.error.error.message;

        this.matSnackBar.open(errorMessage, "OK", {
          verticalPosition: "top",
          horizontalPosition: "center",
          panelClass: 'error'
        });
      });

      this.authService.getUsers().subscribe(
        (res)=>{
          console.log('------------------');
          console.log(res);
          console.log('------------------');

        }
      )

  }
}
function register(value: any) {
  throw new Error('Function not implemented.');
}

