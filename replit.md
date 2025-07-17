# replit.md

## Overview

This is a modern full-stack web application built with React (frontend) and Express.js (backend). It's a bilingual (Turkish/English) business website for "TOZ Solutions," a company specializing in AI-powered automation systems and building technologies. The application features a modern UI with product catalogs, project showcases, lead generation forms, and comprehensive contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui component system

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Pattern**: RESTful API with structured routes
- **Development**: Hot module replacement via Vite integration
- **Build**: esbuild for production bundling

## Key Components

### Database Schema
- **Users**: Basic user management (username, password)
- **Products**: Multilingual product catalog with categories, pricing, and inventory
- **Projects**: Portfolio showcases with status tracking and multilingual content
- **Leads**: Contact form submissions and lead management

### API Endpoints
- **Products API**: Full CRUD operations with filtering (category, featured, limit)
- **Projects API**: Portfolio management with status and year filtering
- **Leads API**: Contact form handling and lead capture

### Frontend Features
- **Internationalization**: Turkish/English language switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component System**: Reusable UI components with consistent styling
- **Contact Integration**: WhatsApp and phone call integration
- **Form Handling**: React Hook Form with validation

## Data Flow

1. **Client Requests**: React components use React Query for API calls
2. **API Layer**: Express routes handle requests with validation
3. **Data Storage**: In-memory storage with interface for database migration
4. **Response**: JSON responses with error handling
5. **UI Updates**: React Query manages caching and UI state synchronization

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database
- **UI Components**: Radix UI ecosystem
- **Styling**: Tailwind CSS with PostCSS
- **Build Tools**: Vite, esbuild, TypeScript

### Third-Party Services
- **WhatsApp Integration**: Direct links for business communication
- **Phone Integration**: Tel: protocol for direct calling
- **Development Tools**: Replit-specific plugins and error handling

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- Express server with TypeScript compilation
- Database migrations via Drizzle Kit
- Environment-based configuration

### Production
- Static frontend build served by Express
- Single-server deployment with static file serving
- Database connection via environment variables
- Build optimization with esbuild

### Storage Strategy
- Current: In-memory storage with sample data
- Future: PostgreSQL database with Drizzle ORM
- Migration path: IStorage interface allows seamless transition
- Session management: PostgreSQL session store ready for implementation

The application is architected for scalability with clear separation of concerns, making it easy to migrate from development to production environments while maintaining code quality and performance.

## Recent Updates

### January 2025
- **SEO Optimization**: Added comprehensive meta tags, Open Graph, Twitter Cards, and structured data for top search engine rankings
- **TypeScript Error Resolution**: Fixed all storage interface type mismatches for production readiness
- **Favicon Implementation**: Created branded favicon for professional appearance
- **Production Readiness**: All TypeScript errors resolved, website fully functional and optimized