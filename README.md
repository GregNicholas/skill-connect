# Skill Connect

## talent and application management app

### Links

- Live Site URL: under construction

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Things to add](#things-to-add)
- [Run Locally](#run-local)
- [Author](#author)

## Overview

### Requirements

Users should be able to:

- Organizations submit a post to request specific talent for a task or job role.
- The form should ask for a title, description, keywords, and the things they want to request from applicants, such as a resume, contact info, links, skills list, writing sample.
- Post titles can be listed on a search page, with each having a link to its post page that displays all info and a button to open a form to submit an application or proposal.
- The organization will have a list of their posts on their dashboard, and a list of responses from others. The response items can be edited by the organization to show status - new/contacted/interviewing/offer/rejected.
- Indivuduals can search posts that match skills they are offering.
- Individuals will have an activity list which will be updated appropriately.
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive form validations

### Screenshot

## My process

### Built with

- [Next.js](https://nextjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript language
- [tailwind](https://tailwindcss.com/) - For styles
- [Node.js](https://nodejs.org/en/) - Javascript runtime environment
- [Supabase](https://supabase.com/) - Real-time database that allows developers to store and sync data across multiple devices in real-time
- [Postgresql](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system
- [Prisma](https://www.prisma.io/) - Server-side library that helps read and write data to the database

### What I learned

### Things to add

## Run Local

Clone to local machine
Add .env and add your MONGO_URI
NODE_ENV = development
PORT = <your chosen port>

### Install dependencies

```
# Backend deps
npm install

# Frontend deps
cd frontend
npm install
```

### Run backend and frontend concurrently

```
npm run dev
```

## Author

- Website - [Greg Schoenberg](https://gregschoenberg.com)

## create next app info:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
