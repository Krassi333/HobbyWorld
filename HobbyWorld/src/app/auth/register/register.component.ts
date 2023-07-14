import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { IUser } from 'src/app/types/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm;

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  constructor(private authService: AuthServiceService,
    private router: Router,
    private matSnackBar: MatSnackBar) { }

  onSubmit() {
    console.log(this.registerForm.value);
    const data: IUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      hashedPassword: this.registerForm.value.password
    }
    this.authService.register(data).subscribe(
      (response) => {
        console.log(response);
        this.registerForm.reset();
        this.router.navigate(['/']);
      },
      (err) => {
        const errorMessage = "Register failed - " + err.error.error.message;

        this.matSnackBar.open(errorMessage, "OK", {
          verticalPosition: "top",
          horizontalPosition: "center",
          panelClass: 'bg-danger'
        });

      }
    )

  }
}
