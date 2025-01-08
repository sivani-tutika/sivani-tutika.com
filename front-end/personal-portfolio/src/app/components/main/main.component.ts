import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  isMobile!: boolean;



}
