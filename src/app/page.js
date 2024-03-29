"use client";

import React, { useState, useEffect } from "react";
import fetchEvents from "@/lib/fetchEvents";

const Page = () => {
	// events
	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// filters
	const [days, setDays] = useState(10);

	useEffect(() => {
		setInterval(() => {
			handleEvents();
		});
	}, [days]);

	const handleEvents = async () => {
		const data = await fetchEvents(days);
		console.log(data);
		setEvents(data);
		setIsLoading(false);
	}

	if(isLoading === true) return (<>Loading...</>);
	else return (
		<div>
			{
				events?.map((event, i) => (
					<div key={i}>
						{event?.title}
					</div>
				))
			}
		</div>
	)
}

export default Page;