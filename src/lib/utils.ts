export const getNextFriday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
	const daysUntilFriday =
		dayOfWeek === 5 ? 7 : dayOfWeek < 5 ? 5 - dayOfWeek : 5 + (7 - dayOfWeek);
	const nextFriday = new Date(
		today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000
	);
	return nextFriday.toISOString().split('T')[0];
};

export const getNextSunday = () => {
	const today = new Date();
	const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
	const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
	const nextSunday = new Date(
		today.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000
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
			return 'C$';
		case 'AUD':
			return 'A$';
		case 'NZD':
			return 'NZ$';
		default:
			return '$'; // Default to '$' for unknown currency codes
	}
};

export const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const priceInDollars = (price: number) => Math.round(price / 100);
