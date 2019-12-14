import { Component, OnInit, Input } from '@angular/core';
import { ITimelineEntry } from '../../models/timeline.interface';
import { CapitalizePipe } from '../../../@theme/pipes';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [CapitalizePipe]
})
export class TimelineComponent implements OnInit {
  alternate = true;
  toggle = true;
  color = false;
  size = 40;
  expandEnabled = true;
  side = 'left';
  @Input() data: ITimelineEntry[];

  constructor() {
    // this.entries = this.data;
  }

  ngOnInit() {}

  public addEntry(header: string, content: string, side: string) {
    this.data.push({ header: header, content: content, contentSide: side });
  }
  removeEntry() {
    this.data.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
