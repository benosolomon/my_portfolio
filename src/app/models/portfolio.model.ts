export interface Experience {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    current?: boolean;
}

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools' | 'AI/ML' | 'Other';
    proficiency?: number;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    highlights?: string[];
}

export interface Certification {
    title: string;
    issuer?: string;
    date?: string;
}

export interface Award {
    title: string;
    description?: string;
}

export interface Education {
    degree: string;
    institution: string;
    duration: string;
    distinction?: boolean;
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    blog: string;
    location: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    summary: string;
    contact: ContactInfo;
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
    certifications: Certification[];
    awards: Award[];
    education: Education[];
}
