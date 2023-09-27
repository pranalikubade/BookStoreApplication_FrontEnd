import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user.model';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
submitForm() {
throw new Error('Method not implemented.');
}

  password: string = '';
  showPassword: boolean = false;

  //password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
 public user=new User;


ngOnInit(): void {}
  //create a variable type formgroup
  registrationFormGroup: FormGroup;

   constructor(private formBuilder:FormBuilder, 
               private http:RegisterService,
               private router:Router,
               private snackBar:MatSnackBar,
               
              ){
                this.registrationFormGroup=this.formBuilder.group({
                  firstName: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-Z\\s]{2,}$")]),
                  lastName:   new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-Z\\s]{2,}$")]),
                  email:     new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
                  dob:"1999-09-03",
                  password:   new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$")]),
                })
    }
 
 
 
 
    onSubmit() {
      if (this.registrationFormGroup.invalid) {
        return;
      }
      // Get the user data from the form
     this.user = this.registrationFormGroup.value;
      // Send the user data to the backend using an HTTP POST request
      this.http.addUser(this.user).subscribe((response:any)=> {
        console.log(response.object); // Log the response from the backend
        
        this.snackBar.open('User Added Successfully', 'OK', { duration: 4000, verticalPosition: 'top' }); // Show a success message
        //this.router.navigateByUrl("/home"); // Navigate to the "home" route after successful submission
      });
    }
    

    


  }