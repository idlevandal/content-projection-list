import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  listItems = ['Dave', 'Bill', 'Jim'];

  public deleteItem(index: number) {
    alert(`Delete ${this.listItems[index]}`);
  }
}
