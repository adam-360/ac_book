# AcBook

Simple application for booking flights.

## Requirements

- git
- Node.js (v16.20.2)
- yarn
- angular-cli (v13.3.11)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:jonmassot/ac_book.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ac_book
   ```
3. Install the dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```
5. Open your browser and navigate to `http://localhost:4200`.

## Features

- Flights:
  - Search for flights
  - View flight details
  - Book flights
  - Cancel bookings
- Admin:
  - Search profiles
  - View profile details
  - View booked flights

## Criteria

- [x] *-- No authentication for now --*
  - [x] Pick random profile on load to book
  - [x] Use Angular State management to store current profile
- [x] Build mock server for testing and development
  - [x] Use faker to generate mock data in mocked services
- [x] Add angular material to layout
- [x] Create booking page
- [x] Implement flight search functionality
  - [x] Use mock data for flights
  - [x] Display search results in a user-friendly format
  - [x] Display additional flight details
- [ ] Implement admin functionalities
  - [x] List all profiles
  - [x] Search profiles by username, firstname or lastname
  - [ ] View profile details
  - [ ] View booked flights per profile