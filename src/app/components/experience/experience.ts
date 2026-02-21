import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';

@Component({
    selector: 'app-experience',
    imports: [CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit {
    experience: Experience[] = [];

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit() {
        this.experience = this.portfolioService.getExperience();
    }
}
