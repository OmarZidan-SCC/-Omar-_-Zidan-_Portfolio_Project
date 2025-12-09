import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private projects: Project[] = [
    { title: 'JavaFX Card Picker', description: 'A JavaFX app that displays 4 random cards and alerts if any two share a rank.', imageUrl: 'assets/project1.png', technologies: 'Java, JavaFX' },
    { title: 'Online Search Website in PHP', description: 'A basic PHP searching website for developer jobs.', imageUrl: 'assets/project2.png', technologies: 'PHP, HTML, CSS' },
    { title: 'Warship Game (Group Project)', description: 'A warship game based on JavaFX, created with Ali Dakhlallah and Mohamad Al Hindi.', imageUrl: 'assets/project3.png', technologies: 'Java, JavaFX' },
    { title: 'Favourite Movie Website', description: 'A website about my favourite movie using only HTML and CSS.', imageUrl: 'assets/project4.png', technologies: 'HTML, CSS' }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
