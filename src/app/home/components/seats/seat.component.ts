import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-seats',
  template: `
    <div class="seats">
      <div class="divider8"></div>
      <div class="row" *ngFor="let item of seats; let i = index">
        <div class="seatSection">{{ item?.section }}</div>
        <div class="spacer16"></div>
        <app-home-seats-list
          [sectionSeats]="item?.sectionSeats"
          [index]="i"
          (handleListClick)="handleClick($event)"
        ></app-home-seats-list>
      </div>
      <div class="section-divider"></div>
    </div>
  `,
  styleUrls: ['../../styles/home.page.scss'],
})
export class SeatComponent {
  @Input() seats: any;
  @Input() index: number;

  @Output() handleSeatClick: EventEmitter<any> = new EventEmitter();

  handleClick(_obj: any) {
    const obj = {
      CatIndex: this.index,
      ..._obj,
    };

    this.handleSeatClick.emit(obj);
  }
}
