import {Component, OnInit, ContentChild, TemplateRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss']
})
export class ContentTemplateComponent implements OnInit {

  @ContentChild(TemplateRef, {static: false}) public listItemTemplate:TemplateRef<any>;

  @Input() listItems: Array<any>;

  @Output() onAddItem  = new EventEmitter<void>();
  @Output() onDeleteItem  = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    //
  }

  public addItem(): void {
    this.onAddItem.emit();
  }

  public deleteItem(index: number) {  
    this.onDeleteItem.emit(index);
  }

}
