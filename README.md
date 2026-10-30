# Egy Railway

Egy Railway is a railway-travel web application for searching Egyptian train routes, viewing schedules, booking tickets, and managing reservations. It was built as a graduation project with the goal of making train travel planning faster, clearer, and more accessible.

## Features

- User registration, login, logout, password reset, and profile management
- Search trains by origin and destination
- Browse popular trains, stations, train types, schedules, and trip details
- Filter and paginate search results
- Book tickets for one or more passengers
- View upcoming and past reservations
- Cancel reservations and download a PDF ticket with a QR code
- In-app help center and train-travel chatbot
- Responsive navigation for desktop and mobile layouts

## Tech stack

- React 19 and React Router 7
- Vite 6
- Supabase Auth, Database, and Storage
- TanStack Query for server state
- Material UI, Tailwind CSS, Sass, and Motion
- React Hook Form and Yup for form handling and validation
- React PDF and QRCode for ticket generation

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or Yarn
- Access to the Supabase project used by the application

### Installation

```bash
git clone https://github.com/iknevo/egy-railway.git
cd egy-railway
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

The repository also contains an npm lockfile-compatible setup, so `npm install && npm run dev` works when pnpm is not available.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create a production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |

## Application structure

```text
src/
├── components/          # Shared UI such as the chatbot and ticket PDF
├── context/             # Shared application context
├── features/
│   ├── Authentication/   # Supabase authentication and profile flows
│   ├── profile/         # Profile and password management
│   ├── reservations/    # Booking CRUD and reservation history
│   ├── stations/        # Station queries
│   └── trains/          # Train search, details, and popular routes
├── pages/               # Route-level screens
├── services/            # Supabase service functions
├── ui/                  # Reusable layout and form primitives
└── data/                # Train, station, and train-type data helpers
```

## Data and authentication

The client uses Supabase for authentication and for the `trains`, `trainTypes`, `stations`, and `reservations` data accessed by the service layer. User profile images are stored through Supabase Storage. Reservation and ticket screens derive trip details from the selected train and reservation records.

### Configuration note

The current demo connects through the Supabase client defined in `src/services/supabase.js`. Before deploying a new instance, move the Supabase URL and publishable key to Vite environment variables and configure the corresponding Supabase Auth redirect URLs. Never place a service-role key in a browser bundle.

## Deployment

The application is a static Vite build and can be deployed to Vercel or another static hosting provider:

```bash
pnpm build
```

Publish the generated `dist/` directory and configure SPA fallback routing so client-side routes resolve to `index.html`.

## License

No license file is currently included in the repository.
