import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['',[Validators.required, Validators.email]],
    'password': ['',[Validators.required, Validators.minLength(6)]],
  })

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  private loginOkNotificaton(u: User){
    this.snackBar.open(
      'Logged in successfully. Welcome ' + u.firstname,'Ok',{duration:2000}
    )
  }

  private loginErrorNotificaton(err){
    this.snackBar.open(
      err,'Ok',{duration:2000}
    )
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(
      this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (u) => {
          this.loginOkNotificaton(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginOkNotificaton(err);
          this.loading = false;
        }
      )

  }

  loginGoogle() {
    this.loading = true;
    this.authService.loginGoogle()
      .subscribe(
        (u) => {
          console.log('logou com o google')
          this.loginOkNotificaton(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginOkNotificaton(err);
          this.loading = false;
        }
      );
  }

}
