import { number, string } from "zod";

export interface ISkill {
  id: string;
  name: string;
  logoUrl: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

enum ProjectType {
  PERSONAL = "PERSONAL",
  CLIENT = "CLIENT",
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  type: ProjectType;
  projectUrl: string;
  viewCount: number;
  frontendRepoUrl?: string;
  backendRepoUrl?: string;
}

export interface IBlog {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imgUrl: string[];
  viewCount: number;
  createdAt: string;
}
