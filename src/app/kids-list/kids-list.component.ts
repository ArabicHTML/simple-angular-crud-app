import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kids-list',
  templateUrl: './kids-list.component.html',
  styleUrls: ['./kids-list.component.css']
})
export class KidsListComponent implements OnInit {
  kids = [
    {name: 'kid name one', address: 'kid home address description'},
    {name: 'kid name two', address: 'kid home address description'},
    {name: 'kid name three', address: 'kid home address description'},
    {name: 'kid name four', address: 'kid home address description'},
    {name: 'kid name five', address: 'kid home address description'},
    {name: 'kid name six', address: 'kid home address description'}
  ];

  name = '';
  address = '';
  currentValue;
  editMessage;
  addMessage;

  addKid(value:any){ 
      //console.log(this.name);
      //console.log(this.address);
      //console.log(value);
    if(this.currentValue){
      console.log('here is my editing value');
      console.log(this.currentValue);
      this.kids[this.currentValue].name = value.name;
      this.kids[this.currentValue].address = value.address;
      console.log(value.name);
      console.log(value.address);
      this.editMessage = true;
      setTimeout(()=>{
        this.editMessage = false;
      }, 3000);
    }else{
       if (this.name && this.address){
        this.kids.push({'name': value.name, 'address': value.address});
        this.addMessage = true;
        setTimeout(()=>{
        this.addMessage = false;
      }, 3000);
      }
    }
    this.currentValue = '';
    this.name = '';
    this.address = '';
  }

  removeKid(kid){
    this.kids.splice(kid, 1);
  }

    editKid(value){
      //console.log(value);
      this.name = this.kids[value].name;
      this.address = this.kids[value].address;
      this.currentValue = value;
      console.log(this.currentValue);
      //console.log(this.name);
      //console.log(this.address);
    }

  constructor() { }

  ngOnInit() {
  }

}
