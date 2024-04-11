import Nav from "@/components/Nav";
import React, { FC } from "react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
	return (
		<Nav>
			<div>
				<h1>Contact information</h1>
				<p>
					<strong>Email:</strong>
					<span>help@jobswipe.com</span>
				</p>
				<p>
					<strong>Phone:</strong>
					<span>+45 1234 5678</span>
				</p>
			</div>
		</Nav>
	);
};

export default Profile;
