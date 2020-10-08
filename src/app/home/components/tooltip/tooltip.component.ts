import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-home-tool-tip',
  template: `
    <div class="tooltip">
      {{ content }}
      <span class="tooltiptext">Booked</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../styles/home.page.scss'],
})
export class TooltipComponent {
  @Input() content: number;
}
