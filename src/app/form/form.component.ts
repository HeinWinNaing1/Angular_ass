import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 name : String ='';
 username : String = ''

 onsubmit(){
    this.username = this.name
 }

 reset(){
  this.name = ""
  this.username =""

 }

}
