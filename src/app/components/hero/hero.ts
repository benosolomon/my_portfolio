import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioData } from '../../models/portfolio.model';

@Component({
    selector: 'app-hero',
    imports: [CommonModule],
    templateUrl: './hero.html',
    styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
    portfolioData!: PortfolioData;

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.portfolioData = this.portfolioService.getPortfolioData();
    }
}
