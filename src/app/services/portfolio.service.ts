import { Injectable } from '@angular/core';
import { PortfolioData, Experience, Skill, Project, Certification, Award, Education } from '../models/portfolio.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private portfolioData: PortfolioData = {
        name: 'Beno Solomon',
        title: 'Consultant at Deloitte | Angular | Generative AI | Node.js',
        summary: `I have a Bachelor's degree in Computer Engineering from the National Engineering College, where I graduated with distinction in 2019. Since then, I have received the Project Excellence Award, Insta Awards and Applause Award for my outstanding performance in my Career. I have also mentored junior team members, increasing their productivity and code quality. My skills encompass HTML, Angular, NodeJS, AWS Serverless API, among others. I'm always eager to learn new technologies and collaborate with others to solve complex problems. My goal is to use my passion and expertise in AI and ML to create positive impact and value for the industry and society.`,
        contact: {
            email: 'benosolomon@gmail.com',
            linkedin: 'https://www.linkedin.com/in/benosolomon',
            blog: 'https://positivevibecafe.blogspot.com/',
            location: 'Tenkasi, Tamil Nadu, India'
        },
        experience: [
            {
                company: 'Deloitte',
                position: 'Consultant',
                duration: 'February 2024 - Present',
                location: 'Chennai',
                current: true,
                description: [
                    'Served as a Full Stack Developer on the Health Care project, successfully migrating a Vision Care Product from Angular 15 to Angular 17',
                    'Upgraded the SAP Composable Storefront from version 6.0 to 2211.19',
                    'Delivered over 30 cards in the last sprint, culminating in the successful go-live of the FE module',
                    'Received appreciation email from the client and two Applause Awards from the manager',
                    'Increased team productivity by mentoring three teammates in frontend development',
                    'Streamlined web application processes and eliminated 90% of software bugs',
                    'Achieved a 75% reduction in user error incidents',
                    'Proposed a configurable approach in the frontend, enabling dynamic code logic for future enhancements',
                    'Leveraged AI tools such as GitHub Copilot on client projects for efficient delivery'
                ]
            },
            {
                company: 'Neewee',
                position: 'Full Stack Developer - II',
                duration: 'December 2021 - December 2023',
                location: 'Bangalore Urban, Karnataka, India',
                description: [
                    'Collaborated with the development team to identify and fix performance bottlenecks',
                    'Achieved a 50% improvement in application response time and enhanced user experience',
                    'Integrated internally-developed micro-services and marketplace 3rd party modules into projects',
                    'Increased the productivity of the team by coaching 3 teammates, including the team lead, on frontend development'
                ]
            },
            {
                company: 'Neewee',
                position: 'Full Stack Developer - I',
                duration: 'December 2020 - November 2021',
                location: 'Bangalore Urban, Karnataka, India',
                description: [
                    'Played a key role in the development, improvement, and operation of web-based AI & ML software for Leading Manufacture company',
                    'Implemented Highcharts to design an intuitive and visually captivating Dashboard page',
                    'Achieved a 30% increase in data engagement and a 25% improvement in data-driven insights for stakeholders'
                ]
            },
            {
                company: 'Centizen, Inc.',
                position: 'Software Developer',
                duration: 'May 2019 - November 2020',
                location: 'Tirunelveli Area, India',
                description: [
                    'Developed multiple full-stack applications using Angular, NodeJS, and ExpressJS',
                    'Built Chimney Check app for inspection process streamlining with offline capabilities',
                    'Created Cent-Finder for marketing team to get professional candidate email addresses',
                    'Developed ZenBasket eCommerce platform with integrated payment processors and social media logins'
                ]
            },
            {
                company: 'Centizen, Inc.',
                position: 'Software Engineer Intern',
                duration: 'December 2018 - May 2019',
                location: 'Tirunelveli Area, India',
                description: [
                    'Developed Web Scraper to automate candidate search process for recruitment outsource institutions',
                    'Implemented automated mapping of candidate profiles with posted job vacancies',
                    'Used Angular 6+, Flask, and Beautiful Soup for web scraping functionality'
                ]
            }
        ],
        skills: [
            { name: 'Angular', category: 'Frontend', proficiency: 95 },
            { name: 'HTML5', category: 'Frontend', proficiency: 95 },
            { name: 'CSS3', category: 'Frontend', proficiency: 90 },
            { name: 'JavaScript', category: 'Frontend', proficiency: 90 },
            { name: 'TypeScript', category: 'Frontend', proficiency: 90 },
            { name: 'Node.js', category: 'Backend', proficiency: 85 },
            { name: 'Express.js', category: 'Backend', proficiency: 85 },
            { name: 'MongoDB', category: 'Backend', proficiency: 80 },
            { name: 'Sequelize ORM', category: 'Backend', proficiency: 80 },
            { name: 'AWS Serverless API', category: 'Backend', proficiency: 75 },
            { name: 'GitHub Copilot', category: 'AI/ML', proficiency: 90 },
            { name: 'Generative AI', category: 'AI/ML', proficiency: 85 },
            { name: 'Splunk Cloud', category: 'Tools', proficiency: 75 },
            { name: 'Git', category: 'Tools', proficiency: 90 },
            { name: 'SAP Composable Storefront', category: 'Frontend', proficiency: 80 },
            { name: 'Ionic', category: 'Frontend', proficiency: 75 },
            { name: 'Cordova', category: 'Frontend', proficiency: 75 },
            { name: 'Highcharts', category: 'Frontend', proficiency: 80 },
            { name: 'Flask', category: 'Backend', proficiency: 70 }
        ],
        projects: [
            {
                title: 'Chimney Check',
                description: 'A mobile application to streamline and standardize chimney inspection processes while delivering professional narrative-style inspection reports.',
                technologies: ['Angular 7+', 'NodeJS', 'ExpressJS', 'Sequelize', 'Ionic', 'Cordova'],
                highlights: [
                    'Offline working capability',
                    'Photo capture for inspection reports',
                    'On-screen signature capture',
                    'Cloud storage for secure report management',
                    'Email, printing, and sharing functionality'
                ]
            },
            {
                title: 'Cent-Finder',
                description: 'A tool designed for marketing teams to obtain professional candidate email addresses using trained email-formatter.',
                technologies: ['Angular 7+', 'NodeJS', 'Sequelize', 'Vonage API', 'Email Validator API'],
                highlights: [
                    'Automated email discovery',
                    'Email validation integration',
                    'Marketing team workflow optimization'
                ]
            },
            {
                title: 'ZenBasket',
                description: 'A comprehensive eCommerce SaaS platform that enables businesses to build and run online stores with free mobile applications.',
                technologies: ['Angular 8+', 'NodeJS', 'ExpressJS', 'Sequelize', 'Google Maps API', 'Payment Processors'],
                highlights: [
                    'Social media login integration',
                    'Multiple payment processor support',
                    'Google Maps integration',
                    'Mobile app generation',
                    'Plug-and-play online store setup'
                ]
            },
            {
                title: 'Web Scraper',
                description: 'An automated recruitment tool that collects candidate details from career-focused social media sites and maps them with job vacancies.',
                technologies: ['Angular 6+', 'Flask', 'Beautiful Soup'],
                highlights: [
                    'Automated candidate profile collection',
                    'Intelligent job-candidate matching',
                    'Reduced manual recruitment efforts',
                    'Career site integration'
                ]
            }
        ],
        certifications: [
            { title: 'Intro to AI: A Beginner\'s Guide to Artificial Intelligence' },
            { title: 'Fundamentals of Java Programming' },
            { title: 'Angular Deep Dive - Beginner to Advanced (Angular 20)' },
            { title: 'Server-side Development with NodeJS, Express and MongoDB' },
            { title: 'Frontend for Java Full Stack Development' }
        ],
        awards: [
            { title: 'Project Excellence Award', description: 'Recognized for outstanding project delivery and performance' },
            { title: 'Insta Awards', description: 'Acknowledged for exceptional contributions to the team' },
            { title: 'Applause Award', description: 'Received multiple times for dedication and excellent performance' }
        ],
        education: [
            {
                degree: 'Bachelor of Engineering in Computer Engineering',
                institution: 'National Engineering College',
                duration: '2015 - 2019',
                distinction: true
            }
        ]
    };

    constructor() { }

    getPortfolioData(): PortfolioData {
        return this.portfolioData;
    }

    getExperience(): Experience[] {
        return this.portfolioData.experience;
    }

    getSkills(): Skill[] {
        return this.portfolioData.skills;
    }

    getProjects(): Project[] {
        return this.portfolioData.projects;
    }

    getCertifications(): Certification[] {
        return this.portfolioData.certifications;
    }

    getAwards(): Award[] {
        return this.portfolioData.awards;
    }

    getEducation(): Education[] {
        return this.portfolioData.education;
    }
}
