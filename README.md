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

### Font Awesome

We use [FontAwesome](https://fontawesome.com) for the icons. To look up an icon you can use, try the
[search system](https://fontawesome.com/search). When using one of the icons, import it as
a react component:

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// ... then somewhere in your code ...

function Foo() {
  return <FontAwesomeIcon icon={faLocationDot} />;
}
```

## Easter Eggs

Using [this] (https://github.com/WeiChiaChang/easter-egg-collection/blob/master/README.md) library

type

```
travel
gun
tank
cool
hangover
haters
thankyou
handsome
psyduck
```

## Backend

> TODO

## Next JS

As we transition to using NextJS, there's a few things you'll have to do, or really think about:

- Component files are treated as url routes, where the `page.jsx` page is specifically the `/`
  url
- API endpoints are defined in `src/app/api/`, in a special `routes.js` file that exports the
  methods that the route will accept. This is very different from express.
- The environment defined in `.env.local` is automatically available in javascript via
  `process.env.FOO`; no need to source it or anything.
- We can import css directly when we define a component
- Files and folders prefixed with an underscore (like `_header/Header.jsx` for instance) _won't_
  be treated as a route - so we can better organize our code.

### How does this work with docker?

The `Dockerfile` defines how the NextJS server will be run in production, but to just get something
up-and-running, we won't have to worry about that just yet. If we want a development environment
set-up, you can run the following code:

```bash
set -a; source .env.local; set +a # This loads the .env.local file in bash
docker compose up sql # This starts postgres and loads `sql/seed.sql`
```

Then if you run this in another terminal:

```bash
npm run dev
```

A NextJS development server will run - _very_ similarly to how Vite would run for us. This way, we
can code without having to do a production build

#### Stopping Docker Compose

You can stop postgres from running by pressing `Ctrl + C`, and if you want to completely delete the
container, run `docker compose down`.

### Production build

If we want to do a production build, though, we'd adjust our docker compose command from earlier
to also include the `server` service, and also tell it to build everything:

```bash
docker compose up --build
```
