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
