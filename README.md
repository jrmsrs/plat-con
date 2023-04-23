# sveltekit-tailwind-supabase-ts

shorten for **sveltekit-typescript-tailwind-supabase-playwright-vitest-pwa-vercel-aaaaaa-template**

fullstack, type-safe / no need for prisma, trpc

## prereqs

- [node.js](https://nodejs.org/en)
- [supabase](https://app.supabase.com/) project

## setup

1. > npm install
2. > cp .env.example .env
3. edit [.env](/.env.example) file\_
4. put supabase project ID on [package.json](/package.json) > `"update-types":... --project-id \"ID\"...`

## generating types

- supabase: `npm run update-types`
- svelte: `npm start`
