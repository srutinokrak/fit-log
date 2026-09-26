# FitLog

FitLog is a modern workout library and plan tracker built with Next.js. It helps users browse exercises, view details for each workout, save workouts for later, and organize a daily training plan.

## Description

FitLog is designed for gym-goers who want a clean, focused way to discover and manage workouts. The app fetches data from a fitness API, displays a responsive library of exercises, and lets users add workouts to their plan or save them for later.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Lucide React
- React Toastify

## Key Features

1. Responsive workout library
2. Workout details page with image, stats, and instructions
3. Add workouts to Today’s Plan
4. Save workouts for later
5. My Plan tracking page with summary metrics
6. Toast notifications for better user interaction
7. Custom 404 page for invalid routes

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Project Structure

```bash
src/
├── app/
│   ├── my-plan/
│   ├── workouts/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── homepage/
│   ├── shared/
│   └── workoutDetails/
├── context/
│   └── Workoutscontext.tsx
├── types/
│   └── workout.types.ts
├── assets/
└── app/
```

## Usage

- Browse the workout library
- Open any workout for detailed instructions
- Add exercises to Today’s Plan
- Save workouts for later
- Visit My Plan to manage your selected exercises

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

## License

This project is intended for educational purposes.
