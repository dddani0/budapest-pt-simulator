import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { MetroAccordion } from './metro-accordion/metro-accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, MetroAccordion],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
