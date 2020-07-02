import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() isSelected: boolean = false;
  @Input() value: string;
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  toggleCheckbox(){
    this.isSelected = !this.isSelected
  }

}
