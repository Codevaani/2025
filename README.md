# 2025 - NUUK Premium Home Appliances

This project is optimized for deployment on **Vercel** using Serverless Functions.

## Local Development

To install dependencies:

```bash
bun install
```

To run locally with Vercel environment:

```bash
bun run dev
# or
npx vercel dev
```

To run the legacy Bun server:

```bash
bun run start
```

## Deployment

To deploy to Vercel:

```bash
npx vercel
```

## Project Structure

- `api/index.ts`: Main entry point (handles device detection).
- `api/desktop.ts`: Desktop version handler.
- `api/mobile.ts`: Mobile version handler.
- `vercel.json`: Vercel configuration and rewrites.
