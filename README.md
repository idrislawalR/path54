# PATH54 Website

Homepage implementation for PATH54, built from the supplied Figma design.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image`
- `next/font`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

The local dev server runs at `http://localhost:3000`.

## Newsletter API

Newsletter submissions are proxied through `/api/newsletter` to the production
API:

```text
https://talent.remoteli.com/api/v1/path54-newsletter
```

To use a different environment, set the server-side `PATH54_API_BASE_URL`
environment variable. For staging, its value is:

```text
https://devadmin.remoteli.com/api/v1
```
