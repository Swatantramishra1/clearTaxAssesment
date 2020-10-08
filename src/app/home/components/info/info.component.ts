import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-info',
  template: `
    <div class="column left info">
      <div class="row" *ngIf="tempObj.selectedCategory !== null">
        Selected Category :
        <div class="containerLayoutCategory row">
          {{ data[tempObj.selectedCategory].categoryType }}
        </div>
      </div>
      <div class="divider8"></div>
      <div class="row" *ngIf="tempObj.selectedCategory !== null">
        Number of seat selected :
        <div class="containerLayoutCategory row">
          {{ tempObj.selectedSeat }}
        </div>
      </div>
      <div class="divider8"></div>
      <div class="row" *ngIf="tempObj.totalPrice">
        Total Price :
        <div class="containerLayoutCategory row">{{ tempObj.totalPrice }}</div>
      </div>
    </div>
  `,
  styleUrls: ['../../styles/home.page.scss'],
})
export class InfoComponent {
  @Input() tempObj: any;
  @Input() data: any;
}
