import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './projects/projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProjectsService]
})
export class CoreDataModule {}
