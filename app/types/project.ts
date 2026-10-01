import type { Technology } from "./technology";


export type Project = {
    id: string;
    technologyIds: string[];
    title: string;
    description: string;
    images: string[];
    link: string;
    created: string;
    fastDescription: string;
    overview: string;
    technologies?: Technology[];
    github?: string;
}