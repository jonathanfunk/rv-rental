import React from 'react';

const RentalCardPlaceholder = ({ classes }: { classes?: string }) => {
	return (
		<div
			className={`w-[calc(100%-12px)] min-h-[300px] lg:min-h-[600px] rounded-[40px] max-w-full bg-gray-100 ${classes}`}
		></div>
	);
};

export default RentalCardPlaceholder;
