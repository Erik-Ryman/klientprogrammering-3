import { User } from "@/models/Authentication";
import useSwr from "swr";

const API_URL = "https://localhost:7134/api";

const fetcher = async (url: string): Promise<User[]> => {
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	return await response.json();
};

const useSwrUsers = () => {
	const { data, error } = useSwr(`${API_URL}/Users/`, fetcher);

	return {
		users: data,
		isLoading: !error && !data,
		isError: error,
	};
};

export default useSwrUsers;
