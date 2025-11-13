import { Component } from '@angular/core';
import { MetroAccordion } from '../metro-accordion/metro-accordion';
import metrodata from '../../../public/metroline.json';

@Component({
  selector: 'metroline-page',
  imports: [MetroAccordion],
  templateUrl: './metroline-page.html',
  styleUrl: './metroline-page.css',
})
export class MetrolinePage {
  metroData: object = metrodata;
}
