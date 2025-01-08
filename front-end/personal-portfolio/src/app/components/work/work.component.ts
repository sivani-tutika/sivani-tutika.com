import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: false,

  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  projects = [
    { title: 'Project 1', image: 'assets/project1.jpg', link: 'https://example.com/project1' },
    { title: 'Project 2', image: 'assets/project2.jpg', link: 'https://example.com/project2' },
    { title: 'Project 3', image: 'assets/project3.jpg', link: 'https://example.com/project3' },
    { title: 'Project 4', image: 'assets/project4.jpg', link: 'https://example.com/project4' }
  ];

}
