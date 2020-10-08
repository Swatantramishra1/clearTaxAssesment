import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-seats-list',
  template: `
    <div class="row">
      <app-home-seats-item
        [item]="item"
        [index]="i"
        *ngFor="let item of sectionSeats; let i = index"
        (handleClick)="handleItemClick($event)"
      ></app-home-seats-item>
    </div>
  `,
  styleUrls: ['../../styles/home.page.scss'],
})
export class SeatListComponent {
  @Input() sectionSeats: any;
  @Input() index: number;

  @Output() handleListClick: EventEmitter<any> = new EventEmitter();

  handleItemClick(index: number) {
    const obj = {
      itemIndex: index,
      listIndex: this.index,
    };

    this.handleListClick.emit(obj);
  }
}
