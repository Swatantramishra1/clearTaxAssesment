import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-category',
  template: `
    <div class="category">
      <div class="divider8"></div>
      <div class="row category">{{ categoryType }}-Rs.{{ amount }}</div>
      <div class="divider8"></div>
      <div class="section-divider"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../styles/category.component.scss'],
})
export class CategoryComponent {
  @Input() categoryType: string;
  @Input() amount: string;
}
