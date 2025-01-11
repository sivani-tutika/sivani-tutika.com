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

  education = [
    { "Institution": "University of North Texas", "Place": "TX, USA", "Qualification": "Masters of Science", "Major": "Artificial Intelligence", "Grade": "4.0/4.0 GPA" },
    { "Institution": "Vidya Jyothi Institute of Technology", "Place": "TS, India", "Qualification": "Bachelors of Technology", "Major": "Computer Science Engineering", "Grade": "3.6/4.0 GPA" },
    { "Institution": "Sri Chaitanya Jr. College", "Place": "TS, India", "Qualification": "11th & 12th", "Major": "Math-Physics-Chemistry", "Grade": "3.9/4.0 GPA" },
    { "Institution": "Kendriya Vidhyalaya", "Place": "TS, India", "Qualification": "10th", "Major": "", "Grade": "4.0/4.0 GPA" },
  ];

}
