This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tools used

date-fns for date management
classnames for easy class name management
@tanstack/react-query for data fetching and statemanagement.
@heroicons/react for icons
@testing-library for testing ui component

date-fns, classnames & @heroicons/reactused to speed up development and tidiness.
@tanstack/react-query for optimisation of data fetching, easy to use and keep up to date with server state.
@testing-library most comonly used for unit tests of react components.

## Excluded stuff

Fetching and caching of data could be optimized. With implentation of hydration for example.
Extracting more resused things such as headings nav navitems into ui components.
Customizing colors using [`color roles`](https://m3.material.io/styles/color/roles).
Adding e2e tests. Maybe using cypress.
