"use client";
import Job from "@/components/Job";
import Nav from "@/components/Nav";
import React, { FC, useState, useEffect, use } from "react";
import useSwrJobs from "@/hooks/useSwrJobs";
import { Job as JobType } from "@/models/Job";

const UserHomePage: FC = () => {
	const jobs: JobType[] = [
		{
			id: "bb4359b0-d8c2-479f-9397-4ce96ecc3418",
			title: "Job 10",
			description:
				"We are seeking a talented and motivated Software Engineer to join our growing team. As a Software Engineer at [Company Name], you will have the opportunity to work on cutting-edge projects that impact millions of users worldwide. You will collaborate with cross-functional teams to design, develop, and deploy high-quality software solutions that drive our products forward.",
			company: {
				id: "7479a49d-e9b1-4179-a2db-6a7d64faa0c7",
				companyName: "Company 10",
				aboutCompany: "About Company 10",
				location: ["Location 10"],
				jobs: [],
				logo: "http://company10.com/logo",
				website: "",
			},
			location: "Location 10",
			salary: 30100,
			finalApplicationDate: "2024-05-08 09:09:38.396532+02",
			companyUrl: "http://company10.com",
			companyId: "",
			requiredSkills: [],
		},
		{
			id: "bb4359b0-d8c2-479f-9397-4ce96ecc3451",
			title: "Job 8",
			description:
				"We are seeking a talented and motivated Software Engineer to join our growing team. As a Software Engineer at [Company Name], you will have the opportunity to work on cutting-edge projects that impact millions of users worldwide. You will collaborate with cross-functional teams to design, develop, and deploy high-quality software solutions that drive our products forward.",
			company: {
				id: "",
				companyName: "",
				location: [],
				aboutCompany: "",
				logo: "",
				website: "",
				jobs: [],
			},
			location: "Location 8",
			salary: 40000,
			finalApplicationDate: "2024-05-08 09:09:38.396529+02",
			companyUrl: "http://company8.com",
			companyId: "",
			requiredSkills: [],
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSwipeRight = () => {
		setCurrentIndex((prevIndex) => prevIndex + 1);
	};

	const handleSwipeLeft = () => {
		setCurrentIndex((prevIndex) => prevIndex + 1);
	};

	return (
		<Nav>
			{jobs && jobs.length > 0 && currentIndex < jobs.length ? (
				<Job
					job={jobs[currentIndex]}
					onSwipeRight={handleSwipeRight}
					onSwipeLeft={handleSwipeLeft}
				/>
			) : (
				<p className='text-center'>No more jobs</p>
			)}
		</Nav>
	);
};

export default UserHomePage;
