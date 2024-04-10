import { Company } from "./Authentication";
import { Skill } from "./Skill";

export interface JobDTO {
	title: string;
	description: string;
	companyId: string;
	location: string;
	optionalSkills?: string[];
	salary: number;
	finalApplicationDate: string;
	requiredSkills: Skill[];
	companyUrl: string;
}

export interface Job extends JobDTO {
	id: string;
	company: Company;
}
