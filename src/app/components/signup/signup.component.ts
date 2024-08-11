import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    user:any = {
      name:"",
      email:"",
      password:""
    }

    formValue:any;
    onSubmit(){
    this.formValue = this.user;
    }
}
