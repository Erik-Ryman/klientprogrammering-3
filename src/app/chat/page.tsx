import Nav from "@/components/Nav";
import React, { FC } from "react";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
	return (
		<Nav>
			<div className='text-center'>
				The chat is not yet implemented. The idea is that when a company swipes right on a private
				user, and they in turn swipe right to create a match, the chat feature will be unlocked and
				an interview can be booked.
			</div>
		</Nav>
	);
};

export default Chat;
