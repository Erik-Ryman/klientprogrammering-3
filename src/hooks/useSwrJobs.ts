import { Job } from "@/models/Job";
import useSwr from "swr";

const API_URL = "https://localhost:7134/api";

const fetcher = async (url: string): Promise<Job[]> => {
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	return await response.json();
};

const useSwrJobs = () => {
	const { data, error } = useSwr(`${API_URL}/Jobs/`, fetcher);

	return {
		jobs: data,
		isLoading: !error && !data,
		isError: error,
	};
};

export default useSwrJobs;
