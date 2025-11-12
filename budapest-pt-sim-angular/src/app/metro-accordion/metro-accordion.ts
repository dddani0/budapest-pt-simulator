import { Component, Input } from '@angular/core';

@Component({
  selector: 'metro-accordion',
  imports: [],
  templateUrl: './metro-accordion.html',
  styleUrl: './metro-accordion.css',
})
export class MetroAccordion {
  @Input() metro: any;

  currentStation: {
    name: string;
    location: string;
    connections: string[];
  } = {
    name: 'Deák Ferenc tér',
    location: 'VI. kerület',
    connections: ['M2', 'M3'],
  };

  setNextStation(station: { name: string; location: string; connections: string[] }): void {
    this.currentStation = station;
  }

  openStation(
    metrolinename: string,
    station: { name: string; location: string; connections: string[] }
  ): void {
    this.setNextStation(station);
    const element: HTMLElement | null = document.getElementById(metrolinename + 'hidden');
    if (element) {
      element.removeAttribute('hidden');
    }
  }
}
