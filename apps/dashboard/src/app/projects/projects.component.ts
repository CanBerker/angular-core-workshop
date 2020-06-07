import { ProjectsService, Project } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$: Observable<object>;
  selectedProject: Project;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit() {
    this.getProjects();
    this.resetProjectSelection();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  resetProjectSelection() {
    this.selectedProject = {
      id: '',
      title: '',
      details: '',
      percentComplete: 0,
      approved: false,
    };
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }

  }

  createProject(project: Project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProjectSelection();
      });
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProjectSelection();
      });
  }

  deleteProject(project: Project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel(currentProject: Project) {
    this.resetProjectSelection();
  }
}
