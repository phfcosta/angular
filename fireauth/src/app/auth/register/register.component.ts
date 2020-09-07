import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = this.fb.group({
    'firstname': ['',[Validators.required]],
    'lastname': ['',[Validators.required]],
    'address': ['',[]],
    'city': ['',[]],
    'state': ['',[]],
    'phone': ['',[]],
    'mobilephone': ['',[]],
    'email': ['',[Validators.required, Validators.email]],
    'password1': ['',[Validators.required, Validators.minLength(5)]],
    'password2': ['',[Validators.required, Validators.minLength(5)]],
  }, 
  {validator: this.matchingPasswords});

  states = ['MG','SP','RG','SC','PE'];

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  matchingPasswords(group: FormGroup) {
    if (group){
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if(password1 == password2){
        return null;
      }
      return {matching: false};
    }
  }

  onSubmit() {
    const newUser: User = {
      firstname: this.formRegister.value.firstname,
      lastname:this.formRegister.value.lastname,
      address:this.formRegister.value.address,
      city:this.formRegister.value.city,
      state:this.formRegister.value.state,
      phone:this.formRegister.value.phone,
      mobilephone:this.formRegister.value.mobilephone,
      password:'',
      email: this.formRegister.value.email
    };

    this.authService.register(newUser)
      .subscribe(
        (u) => {
          this.snackBar.open(
            'successfully registered','OK',{duration:2000}
          );
          this.router.navigateByUrl('/auth/login');
        },
        (err) => {
          console.log(err);
          this.snackBar.open(

            'Error. You are not registered','OK',{duration:2000}
          );
        }
      )
  }

}
