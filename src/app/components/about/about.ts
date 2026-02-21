import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit {
  portfolioData!: PortfolioData;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioData = this.portfolioService.getPortfolioData();
  }
}
