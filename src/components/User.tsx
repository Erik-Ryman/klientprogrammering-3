import { User as UserType } from "@/models/Authentication";
import React, { FC } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import TinderCard from "react-tinder-card";

interface UserProps {
	user: UserType;
	onSwipeRight: () => void;
	onSwipeLeft: () => void;
}

const User: FC<UserProps> = ({ user, onSwipeLeft, onSwipeRight }) => {
	const { id, firstName, lastName, location, aboutMe, skills } = user;
	return (
		<div className='flex flex-col justify-center items-center'>
			<TinderCard
				key={id}
				onSwipe={(dir) => {
					if (dir === "left") {
						onSwipeLeft();
					} else if (dir === "right") {
						onSwipeRight();
					}
				}}
				onCardLeftScreen={() => {}}
			>
				<div className='bg-slate-100 ring-2 ring-indigo-500 rounded-3xl max-w-md w-full'>
					<div className='p-4'>
						<div className='flex items-center justify-between gap-x-4'>
							<h3
								id={id}
								className='rounded-full bg-indigo-500 px-2.5 py-1 text-lg font-semibold leading-8 text-white'
							>
								{firstName} {lastName}
							</h3>
							<p className='font-semibold leading-5'>{location}</p>
						</div>
						<p className='mt-4 text-sm leading-6 text-gray-900'>{aboutMe}</p>

						<ul role='list' className='mt-4 leading-6 text-gray-900 grid grid-cols-2 gap-y-2'>
							{skills?.map((skill) => (
								<li key={skill.id}>{skill.name}</li>
							))}
						</ul>
						<div className='mt-4 flex justify-around'>
							<button
								className='p-2 rounded-full bg-red-500 text-white'
								onClick={() => {
									onSwipeLeft();
								}}
							>
								<XMarkIcon className='w-8 h-8' />
							</button>
							<button
								className='p-2 rounded-full bg-green-500 text-white'
								onClick={() => {
									onSwipeRight();
								}}
							>
								<CheckIcon className='w-8 h-8' />
							</button>
						</div>
					</div>
				</div>
			</TinderCard>
		</div>
	);
};

export default User;
