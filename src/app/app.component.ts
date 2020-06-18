import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public myFormArray: FormArray = new FormArray([]);
  
  listItems = ['Dave', 'Bill', 'Jim'];

  public myForm = this.fb.group({
    cars: this.myFormArray
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addItem();
  }

  public addItem(): void {
    const formItem = this.fb.group({
      make: [''],
      model: ['']
    })
    this.myFormArray.push(formItem);
    
  }

  public deleteItem(index: number) {
    this.myFormArray.removeAt(index);
  }
}
