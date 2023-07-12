import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('loginForm') loginForm!: NgForm;

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  constructor(private authService: AuthServiceService,
    private router: Router,
    private matSnackBar: MatSnackBar) { }

  onSubmit() {
    console.log(this.loginForm.value);
    const data=this.loginForm.value;
    this.authService.login(data).subscribe(
      (response) => {
        console.log(response);
        this.loginForm.reset();
        this.router.navigate(['/']);
      },
      (err) => {
        const errorMessage = "Login failed - " + err.error.error.message;

        this.matSnackBar.open(errorMessage, "OK", {
          verticalPosition: "top",
          horizontalPosition: "center",
          panelClass: 'bg-danger'
        });

      }
    )

  }

}
