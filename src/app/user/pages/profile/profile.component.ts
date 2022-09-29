import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   profileForm:FormGroup;

  constructor(fb: FormBuilder) {
    this.profileForm = fb.group({
      name: [''],
      email: [''],
      bio: [''],

   })

  }

  ngOnInit(): void {
  }

 submitProfile(){
  console.log(this.profileForm.value)
 }


}


