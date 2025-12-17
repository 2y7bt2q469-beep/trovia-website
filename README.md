# Trovia Marketing Website

A production-ready marketing website for Trovia built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Domain-neutral homepage** with hero section and domain cards
- **Four secondary pages**: Marine, Home, Creators, and Business
- **Responsive design** optimized for mobile-first
- **Beta signup form** with validation and success states
- **Clean, modern design** emphasizing trust and user control
- **Accessible semantic HTML** throughout
- **TypeScript** for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── api/beta/          # Beta signup API endpoint
│   ├── business/          # Business domain page
│   ├── creators/          # Creators domain page
│   ├── home/              # Home domain page
│   ├── marine/            # Marine domain page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── BetaSignup.tsx     # Beta signup form component
│   └── DomainCard.tsx     # Domain card component
└── lib/
    └── types.ts           # TypeScript type definitions
```

## Key Design Decisions

- **No "agent" language** in hero messaging
- **Avoids "your world" phrasing** for privacy sensitivity
- **Uses "accessible" rather than "shareable"** for better positioning
- **Explicitly communicates user control** and validation vs. surveillance
- **Clearly states users are NOT training** a public LLM
- **Mentions expertise availability** in ChatGPT, Claude, customer support, and custom apps

## Beta Form

The beta signup form captures:
- Name and email
- Interest type (Personal/Content Creator/Business/Enterprise)
- Domain preference (preselected based on page)
- Free text description of expertise to capture
- Currently stores submissions in memory and logs to console

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 18** for UI components
- **Headless UI** for accessible components
- **Heroicons** for iconography