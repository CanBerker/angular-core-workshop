import { Project } from './project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: '1',
      title: 'Remote Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Remote Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Remote Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];

  constructor() { }

  all(): Project[] {
    return this.projects;
  }
}
