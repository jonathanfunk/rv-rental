export const getNextFriday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
	const daysUntilFriday =
		dayOfWeek === 5 ? 7 : dayOfWeek < 5 ? 5 - dayOfWeek : 6 - dayOfWeek + 5;

	// Adjust for timezone offset (PST is UTC-8)
	const timezoneOffsetMs = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
	const nextFriday = new Date(
		today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000 - timezoneOffsetMs
	);

	return nextFriday.toISOString().split('T')[0];
};

export const getNextSunday = () => {
	const today = new Date(); // Get the current date
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

	let daysToAdd;
	if (dayOfWeek === 0) {
		// If today is Sunday, add 7 days to get to the next Sunday
		daysToAdd = 7;
	} else {
		// Otherwise, add days until the next Sunday
		daysToAdd = 7 - dayOfWeek;
	}

	// Adjust for timezone offset (PST is UTC-8)
	const timezoneOffsetMs = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
	const nextSunday = new Date(
		today.getTime() + daysToAdd * 24 * 60 * 60 * 1000 - timezoneOffsetMs
	);

	return nextSunday.toISOString().split('T')[0];
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
