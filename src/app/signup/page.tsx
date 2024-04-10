"use client";
import { AUTH } from "@/services/ApiService";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm: NextPage = () => {
	const [registerData, setRegisterData] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		location: "",
		aboutMe: "",
	});
	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, email: e.target.value });
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, password: e.target.value });
	};

	const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, firstName: e.target.value });
	};

	const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, lastName: e.target.value });
	};

	const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, location: e.target.value });
	};

	const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({ ...registerData, aboutMe: e.target.value });
	};

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			await AUTH.registerPrivateUser(registerData);
			const response = await AUTH.authenticateUser(registerData.email, registerData.password);
			AUTH.handleAuthResponse(response);
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className='min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className='text-center text-3xl font-extrabold text-white'>
					Sign up as a private user
				</h2>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-gray-800 py-8 px-6 shadow-md sm:rounded-lg sm:px-10'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-white'>
								Email address
							</label>
							<div className='mt-1'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									value={registerData.email}
									onChange={handleEmailChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-white'>
								Password
							</label>
							<div className='mt-1'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									value={registerData.password}
									onChange={handlePasswordChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='firstName' className='block text-sm font-medium text-white'>
								First Name
							</label>
							<div className='mt-1'>
								<input
									id='firstName'
									name='firstName'
									type='firstName'
									autoComplete='firstName'
									required
									value={registerData.firstName}
									onChange={handleFirstNameChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='lastName' className='block text-sm font-medium text-white'>
								Last Name
							</label>
							<div className='mt-1'>
								<input
									id='lastName'
									name='lastName'
									type='lastName'
									autoComplete='lastName'
									required
									value={registerData.lastName}
									onChange={handleLastNameChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='location' className='block text-sm font-medium text-white'>
								Location
							</label>
							<div className='mt-1'>
								<input
									id='location'
									name='location'
									type='location'
									autoComplete='location'
									required
									value={registerData.location}
									onChange={handleLocationChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='aboutMe' className='block text-sm font-medium text-white'>
								About Me
							</label>
							<div className='mt-1'>
								<input
									id='aboutMe'
									name='aboutMe'
									type='aboutMe'
									autoComplete='aboutMe'
									required
									value={registerData.aboutMe}
									onChange={handleAboutMeChange}
									className='appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white'
								/>
							</div>
						</div>

						<div>
							<input
								type='submit'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								value={"Register"}
							/>
						</div>
						<div>
							<Link
								href={"/login"}
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Go to login
							</Link>
							<Link
								href={"/signup/Company"}
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Register a company user
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
