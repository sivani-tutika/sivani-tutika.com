import { Component } from '@angular/core';
import projectsData from '../../data/projects.json';

@Component({
  selector: 'app-work',
  standalone: false,

  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  projects = projectsData.data.map(item => ({
    title: item.title,
    image: item.image || 'assets/default-image.jpg', // Provide a default image if missing
    link: item.link || '#' // Provide a default link if missing
  }));

}
