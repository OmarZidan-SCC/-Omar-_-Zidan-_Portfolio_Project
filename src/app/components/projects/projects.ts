import {Component, OnInit} from '@angular/core';
import {PortfolioDataService, Project} from '../../services/portfolio-data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    NgForOf
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projectList: Project[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.projectList = this.portfolioDataService.getProjects();
  }
}
