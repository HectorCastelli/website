export type Skill = {
name: string;
rating: SkillRating;
}

// Based on the [Dreyfus model](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition)
export enum SkillRating {
    Novice,
    AdvancedBeginner,
    Practitioner,
    Proficient,
    Expert
}

export const softwareSkills: Skill[] = [

    {
        name: "Software Architecture",
        rating: SkillRating.Proficient,
    },
    {
        name: "Distributed Systems",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Quality Control",
        rating: SkillRating.Expert,
    },
    {
        name: "Continuous Integration",
        rating: SkillRating.Proficient,
    },
    {
        name: "Continuous Delivery",
        rating: SkillRating.Proficient,
    },
    {
        name: "Software Security",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "Monitoring & Observability",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Infrastructure",
        rating: SkillRating.Proficient,
    },
    {
        name: "Networking",
        rating: SkillRating.Practitioner,
    },

];

export const programmingLanguages: Skill[] = [
    {
        name: "java",
        rating: SkillRating.Proficient,
    },
    {
        name: "C",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "C++",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "assembly",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "rust",
        rating: SkillRating.Practitioner,
    },
    {
        name: "groovy",
        rating: SkillRating.Proficient,
    },
    {
        name: "python",
        rating: SkillRating.Practitioner,
    },
    {
        name: "javascript",
        rating: SkillRating.Proficient,
    },
    {
        name: "typescript",
        rating: SkillRating.Proficient,
    },
    {
        name: "SQL",
        rating: SkillRating.Proficient,
    },
    {
        name: "PHP",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Pascal",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Kotlin",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "Lua",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "Dart",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Bash",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Powershell",
        rating: SkillRating.AdvancedBeginner,
    },
];

export const businessSkills: Skill[] = [
    {
        name: "Data analysis",
        rating: SkillRating.Proficient,
    },
    {
        name: "User-Experience",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Platform engineering",
        rating: SkillRating.Proficient,
    },
    {
        name: "Systems thinking",
        rating: SkillRating.Proficient,
    },
    {
        name: "Process Optimization",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Product Management",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "Product Strategy",
        rating: SkillRating.AdvancedBeginner,
    },
    {
        name: "Research",
        rating: SkillRating.Proficient,
    },
    {
        name: "Prioritization",
        rating: SkillRating.Practitioner,
    },
];

export const interpersonalSkills: Skill[] = [
    {
        name: "Consulting",
        rating: SkillRating.Proficient,
    },
    {
        name: "Leadership",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Public Speaking",
        rating: SkillRating.Expert,
    },
    {
        name: "Inclusive Language",
        rating: SkillRating.Proficient,
    },
    {
        name: "Empathy",
        rating: SkillRating.Expert,
    },
    {
        name: "Mentoring",
        rating: SkillRating.Proficient,
    },
    {
        name: "Conflict Resolution",
        rating: SkillRating.Practitioner,
    },
    {
        name: "Facilitation",
        rating: SkillRating.Practitioner,
    },
];