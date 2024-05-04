export const getNextFriday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

	// Calculate days until next Friday
	let daysUntilFriday;
	if (dayOfWeek === 5) {
		// If today is Friday, move to next week's Friday
		daysUntilFriday = 7;
	} else if (dayOfWeek < 5) {
		// If today is before Friday, find remaining days in this week
		daysUntilFriday = 5 - dayOfWeek;
	} else {
		// If today is Saturday or Sunday, find days until next week's Friday
		daysUntilFriday = 5 + (7 - dayOfWeek);
	}

	// Calculate next Friday
	const nextFriday = new Date(
		today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000
	);

	const nextFridayFormatted = new Date(
		nextFriday.getTime() - nextFriday.getTimezoneOffset() * 60000
	)
		.toISOString()
		.split('T')[0];

	return nextFridayFormatted;
};

export const getNextSunday = () => {
	const nextFriday = new Date(getNextFriday()); // Get the next Friday

	// Calculate days until next Sunday
	let daysUntilSunday;
	const dayOfWeek = nextFriday.getDay();
	if (dayOfWeek === 5) {
		// If next Friday is Friday, next Sunday is 2 days after
		daysUntilSunday = 2;
	} else if (dayOfWeek === 6) {
		// If next Friday is Saturday, next Sunday is 1 day after
		daysUntilSunday = 1;
	} else if (dayOfWeek === 0) {
		// If next Friday is Sunday, next Sunday is 6 days after
		daysUntilSunday = 6;
	} else {
		// If next Friday is Monday to Thursday, next Sunday is 7 - dayOfWeek days after
		daysUntilSunday = 7 - dayOfWeek;
	}

	// Calculate next Sunday
	const nextSunday = new Date(
		nextFriday.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000
	);

	const nextSundayFormatted = new Date(
		nextSunday.getTime() - nextSunday.getTimezoneOffset() * 60000
	)
		.toISOString()
		.split('T')[0];

	return nextSundayFormatted;
};

export const getCurrencySymbol = (currencyCode: string) => {
	switch (currencyCode) {
		case 'USD':
			return '$';
		case 'GBP':
			return '£';
		case 'EUR':
			return '€';
		case 'CAD':
			return '$';
		case 'AUD':
			return '$';
		case 'NZD':
			return '$';
		default:
			return '$';
	}
};

export const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const priceInDollars = (price: number) => Math.round(price / 100);
