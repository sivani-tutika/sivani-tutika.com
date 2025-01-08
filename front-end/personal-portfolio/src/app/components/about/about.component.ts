import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  skills = [
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Python Programming',
    'Data Analysis'
  ];

  details = [
    { label: 'Qualification', value: 'Bachelor’s Degree in Computer Science' },
    { label: 'Education', value: 'XYZ University, Class of 2022' },
    { label: 'Location', value: 'Hyderabad, India' }
  ];

}
