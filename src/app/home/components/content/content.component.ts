import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-content',
  template: `
    <div class="column" *ngFor="let item of data; let i = index">
      <app-home-category
        [categoryType]="item?.categoryType"
        [amount]="item?.totalAmount"
      ></app-home-category>
      <app-home-seats
        [seats]="item?.seats"
        [index]="i"
        (handleSeatClick)="handleClick.emit($event)"
      ></app-home-seats>
    </div>
  `,
  styleUrls: ['../../styles/home.page.scss'],
})
export class ContentComponent {
  @Input() data: any;
  @Output() handleClick: EventEmitter<number> = new EventEmitter();
}
