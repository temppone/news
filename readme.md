# News Forum

A modern forum application built with Next.js where users can interact, share, and discuss topics.

## Features

- User authentication and profiles
- Create and participate in discussions
- Real-time updates
- Responsive design
- PostgreSQL database for data persistence

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **Development**: Docker (for local services)

## Getting Started

### Prerequisites

- Node.js 16 or later
- Docker and Docker Compose
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development environment:

```bash
npm run dev
```

This command will:

- Start the PostgreSQL database in Docker
- Run the Next.js development server

Other useful commands:

- `npm run services:up` - Start Docker services
- `npm run services:stop` - Stop Docker services
- `npm run services:down` - Remove Docker services
- `npm run lint:check` - Check code formatting
- `npm run lint:fix` - Fix code formatting
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
news/
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── public/        # Static files
├── styles/        # CSS styles
└── infra/        # Infrastructure configuration
    └── compose.yaml  # Docker Compose configuration
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
