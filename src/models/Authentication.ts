import { Job } from "./Job";
import { Skill } from "./Skill";

export interface RegisterCompanyUserDTO {
	email: string;
	password: string;
	companyName: string;
	location: string[];
	aboutCompany: string;
	logo?: string;
	website: string;
}

export interface RegisterPrivateUserDTO {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	location: string;
	aboutMe: string;
	profilePicture?: string;
}

export interface LoginDTO {
	email: string;
	password: string;
}

export interface LoginResponseDTO {
	JwtToken: string;
}

export interface Company {
	id: string;
	companyName: string;
	location: string[];
	aboutCompany: string;
	logo: string;
	website: string;
	jobs: Job[];
}

export interface User {
	id: string;
	userName: string;
	normalizedUserName: string;
	email: string;
	normalizedEmail: string;
	emailConfirmed: boolean;
	passwordHash: string;
	securityStamp: string;
	concurrencyStamp: string;
	phoneNumber: any;
	phoneNumberConfirmed: boolean;
	twoFactorEnabled: boolean;
	lockoutEnd: any;
	lockoutEnabled: boolean;
	accessFailedCount: number;
	firstName?: string;
	lastName?: string;
	location?: string;
	aboutMe?: string;
	companyName?: string;
	aboutCompany?: string;
	logo?: string;
	website?: string;
	skills?: Skill[];
}
