import { ProjectsService, Project } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects: Project[];
  selectedProject: Project;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}
