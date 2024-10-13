import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  jobs = [
    {
      title: 'Senior graphic design specialist',
      dates: '2019 - Present',
      company: 'Experion, New York, NY',
      responsibilities: [
        'Lead in the design, development, and implementation of graphic, layout, and production communication materials',
        'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project',
        'Supervise the assessment of graphic materials to ensure quality and accuracy of the design',
        'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
      ]
    },
    {
      title: 'Junior graphic designer',
      dates: '2017 - 2019',
      company: 'Creativus, Los Angeles, CA',
      responsibilities: [
        'Assisted in the design and production of various marketing materials for clients',
        'Collaborated with senior designers to develop concepts and graphics for large-scale campaigns',
        'Maintained project deadlines and ensured timely delivery of all design tasks',
        'Provided quality control to ensure graphic materials were print-ready'
      ]
    },
    {
      title: 'Graphic design intern',
      dates: '2016 - 2017',
      company: 'Pixel Studios, San Francisco, CA',
      responsibilities: [
        'Supported the design team with research, asset preparation, and revisions',
        'Created visual content for social media campaigns',
        'Prepared mockups and presentations for client approval',
        'Participated in brainstorming sessions to assist in the development of creative concepts'
      ]
    }
  ];
  
}