# Next-Gen Learning Dashboard

A dark-mode Next.js App Router prototype for the frontend intern challenge.

## Stack
- Next.js App Router
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React

## What is included
- Server Component data fetch from Supabase
- Bento-style responsive layout
- Animated course cards with icon mapping and progress bars
- Sidebar micro-interactions with `layoutId`
- Loading skeletons and error UI
- TypeScript data model
- `.env.example`
- Supabase schema + seed SQL

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

3. Create the `courses` table using `supabase/schema.sql`.

4. Seed the table with the sample rows in `supabase/seed.sql`.

5. Run locally:
   ```bash
   npm run dev
   ```

## Architecture notes

### Server / client split
- `src/app/page.tsx` is a Server Component that fetches courses from Supabase.
- Interactive UI pieces such as animated cards and the sidebar are client components.
- The page passes plain serializable data into the motion components.

### Performance choices
- Animations use `transform` and `opacity`.
- Card hover uses spring physics.
- Course progress animates from 0 to the database value on mount.
- Skeletons use a subtle pulsing state while data is loading.

### Error handling
- Database failures render a graceful fallback state instead of crashing the route.
- The app still provides a useful shell even if the fetch fails.

## Supabase SQL

See:
- `supabase/schema.sql`
- `supabase/seed.sql`
