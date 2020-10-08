import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-home-seats-item',
  template: `
    <ng-container *ngIf="item.number !== 0; else Emptyspace">
      <ng-container *ngIf="item?.selected; else userSelected">
        <div
          class="seatsItem selected"
          [class.selected]="item?.selected"
          [attr.disabled]="true"
          title="Booked Already"
        >
          <app-home-tool-tip [content]="item.number"></app-home-tool-tip>
        </div>
      </ng-container>
      <ng-template #userSelected>
        <div
          class="seatsItem "
          (click)="onClick()"
          [class.userSelected]="item?.userSelected"
          [attr.disabled]="item?.userSelected ? true : null"
        >
          {{ item.number }}
        </div>
      </ng-template>
    </ng-container>
    <ng-template #Emptyspace>
      <div class="empty"></div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../styles/home.page.scss'],
})
export class SeatItemComponent {
  @Input() item: any;
  @Input() index: number;

  @Output() handleClick: EventEmitter<number> = new EventEmitter();

  onClick() {
    if (!this.item.userSelected) {
      this.handleClick.emit(this.index);
    }
  }
}
