# RV Rental App

This project is a web application for renting recreational vehicles (RVs), built with [Next.js](https://nextjs.org/).

## Overview

The RV Rental App enables users to browse, search, and book RVs for their trips. It provides detailed information about each RV, including features, pricing, and availability. The data is sourced from the Outdoorsy API.

## Features

- **Browse RVs:** Users can explore a variety of RVs available for rent.
- **Search Functionality:** Search for RVs based on location, RV types, price, dates, and number of guests.
- **Booking System:** Reserve an RV for specific dates.

## Demo

You can see a live demo of the project [here](https://rvrental.jonathanfunk.ca).

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Outdoorsy API

## Setup

1. Clone the repository: `git clone https://github.com/jonathanfunk/rv-rental.git`
2. Navigate to the project directory: `cd rv-rental-app`
3. Install dependencies: `npm install`
4. Contact the Outdoorsy support team at [partners@outdoorsy.com](mailto:partners@outdoorsy.com) for access to the API documentation.
5. Create a `.env.local` file in the root directory.
6. Add the following environment variables to the `.env.local` file:
   NEXT_PUBLIC_BASE_SEARCH_URL='https://your-outdoorsy-base-search-url'
   NEXT_PUBLIC_GOOGLE_API_KEY='your-google-maps-api-key'
7. Run the development server: `npm run dev`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
