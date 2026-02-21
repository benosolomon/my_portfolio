import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Education } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.education = this.portfolioService.getEducation();
  }
}
