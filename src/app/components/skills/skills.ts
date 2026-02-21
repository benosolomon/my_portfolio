import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: string[] = ['Frontend', 'Backend', 'AI/ML', 'Tools'];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
