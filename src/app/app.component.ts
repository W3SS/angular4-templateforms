import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm;
  defaultQuestion = "pet";
  genders = ['male', 'female'];
  users = {
    user: "",
    email: "",
    question: "",
    gender: ""
  }


  suggestUserName() {
    const suggestedName = "Jason"
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }



  onSubmit() {
    console.log(this.signUpForm)
    this.users.user = this.signUpForm.value.userData.username;
    this.users.email = this.signUpForm.value.userData.email;
    this.users.question = this.signUpForm.value.secret;
    this.users.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
