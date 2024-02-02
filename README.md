# Combat Classifieds

## Prerequisites

First, install all the node dependencies:

```bash
npm install
```

## Frontend

To get the build server running for the frontend, just type:

```bash
npm run dev:client
```

This should open a running vite process, which tells you where the frontend is hosted
(usually `http://localhost:5173`).

## Using Tailwind

There are a few ways you can use tailwind, but the most productive workflow involves using the
`@apply` keyword in `client/app.css` to apply specific
[tailwind rules](https://tailwindcss.com/docs/font-weight).

### Useful Colors

The palette that tailwind provides can be found [here](https://tailwindcss.com/docs/customizing-colors).

#### Footer BG

- `bg-gray-900`

#### Yellow text

- `text-yellow-500`

## Using LINT

To view files that fail the lint, you can run this:

```bash
npm run lint
```

> **Note**, it will be run for every pull request and commit in the `REDACTED` branch.

To automatically prettify your code, run:

```bash
npx prettier --write .
```

> **Warning**, this may break your code! Please make sure you commit before prettifying
> so you can roll-back in case anything breaks.

## Backend

> TODO
