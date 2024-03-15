import urls from "@/config/urls";

const fetchEvents = async (days = 10) => {
	try {
		const response = await fetch(
			`${urls.apiBaseUrl}/events?days=${days ?? 10}`,
		);

		if (!response.ok) {
			console.error("Fetch error, status code: " + response.status);
		}

		const data = await response.json();
		if(!data || !data.events) return console.error("Fetch error, no proper data found.");
		
		return data?.events ?? [];
	} catch (error) {
		console.error(error);
	}
};
