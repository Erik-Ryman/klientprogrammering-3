"use client";
import Nav from "@/components/Nav";
import User from "@/components/User";
import React, { FC, useState } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
	const users = [
		{
			id: "b1334857-a628-473c-89b9-86a556004047",
			discriminator: "User",
			companyName: "",
			company_Location: "",
			aboutCompany: "",
			logo: "",
			website: "",
			firstName: "Private",
			lastName: "User",
			aboutMe:
				"A highly motivated and experienced software engineer, I am currently seeking a new role that challenges me and provides opportunities for growth. My background in developing scalable web applications, along with my superior team collaboration and problem-solving skills, makes me a strong candidate for any forward-thinking company.",
			location: "Behind you...",
			userName: "private@test.com",
			normalizedUserName: "PRIVATE@TEST.COM",
			email: "private@test.com",
			normalizedEmail: "PRIVATE@TEST.COM",
			emailConfirmed: true,
			passwordHash:
				"AQAAAAIAAYagAAAAEOz3ZcZ4IKROwKt9MjPtAk5WsyTQvdtEWbhmbggv9H5ra/aDT5MxDbiEIjtw1F1aUw==",
			securityStamp: "",
			concurrencyStamp: "0b2a44d3-7aef-445b-8db4-4c82ea22347b",
			phoneNumber: "",
			phoneNumberConfirmed: false,
			twoFactorEnabled: false,
			lockoutEnd: "",
			lockoutEnabled: false,
			accessFailedCount: 0,
		},
		{
			id: "b1334857-a628-473c-89b9-86a556004047",
			discriminator: "User",
			companyName: "",
			company_Location: "",
			aboutCompany: "",
			logo: "",
			website: "",
			firstName: "Private",
			lastName: "User",
			aboutMe:
				"A highly motivated and experienced software engineer, I am currently seeking a new role that challenges me and provides opportunities for growth. My background in developing scalable web applications, along with my superior team collaboration and problem-solving skills, makes me a strong candidate for any forward-thinking company.",
			location: "Behind you...",
			userName: "private@test.com",
			normalizedUserName: "PRIVATE@TEST.COM",
			email: "private@test.com",
			normalizedEmail: "PRIVATE@TEST.COM",
			emailConfirmed: true,
			passwordHash:
				"AQAAAAIAAYagAAAAEOz3ZcZ4IKROwKt9MjPtAk5WsyTQvdtEWbhmbggv9H5ra/aDT5MxDbiEIjtw1F1aUw==",
			securityStamp: "",
			concurrencyStamp: "0b2a44d3-7aef-445b-8db4-4c82ea22347b",
			phoneNumber: "",
			phoneNumberConfirmed: false,
			twoFactorEnabled: false,
			lockoutEnd: "",
			lockoutEnabled: false,
			accessFailedCount: 0,
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
			{users && users.length > 0 && currentIndex < users.length ? (
				<User
					user={users[currentIndex]}
					onSwipeRight={handleSwipeRight}
					onSwipeLeft={handleSwipeLeft}
				/>
			) : (
				<p className='text-center'>No more users</p>
			)}
		</Nav>
	);
};

export default Page;
