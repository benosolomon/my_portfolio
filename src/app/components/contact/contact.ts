import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  portfolioData!: PortfolioData;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioData = this.portfolioService.getPortfolioData();
  }
}
