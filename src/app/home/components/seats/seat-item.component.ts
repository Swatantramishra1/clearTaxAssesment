import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-seats-item',
  template: `
    <ng-container *ngIf="item.number !== 0; else Emptyspace">
      <div
        class="seatsItem"
        (click)="handleClick.emit(index)"
        [class.selected]="item?.selected"
      >
        {{ item.number }}
      </div>
    </ng-container>
    <ng-template #Emptyspace>
      <div class="empty"></div>
    </ng-template>
  `,
  styleUrls: ['../../styles/home.page.scss'],
})
export class SeatItemComponent {
  @Input() item: any;
  @Input() index: number;

  @Output() handleClick: EventEmitter<number> = new EventEmitter();
}
