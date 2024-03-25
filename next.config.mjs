/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['res.cloudinary.com'],
	},
	async headers() {
		return [
			{
				source: '/data/api/:path*', // Update the source path to match your API route location
				headers: [
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-Requested-With, Content-Type, Authorization',
					},
				],
			},
		];
	},
};

export default nextConfig;
