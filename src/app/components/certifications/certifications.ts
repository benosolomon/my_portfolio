import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Certification, Award } from '../../models/portfolio.model';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];
  awards: Award[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.certifications = this.portfolioService.getCertifications();
    this.awards = this.portfolioService.getAwards();
  }
}
