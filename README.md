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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- install docker
- Set the temp.env.local to env.local
- `set -a; source .env.local; set +a`

## Errors

- [Error response from daemon: driver failed programming external connectivity on endpoint website-sql-1 (e5c5d7ca78ecc5b2a52d028f0e0af887022699e4c1b1d097a7d4ac445414a096): Error starting userland proxy: listen tcp4 0.0.0.0:5432: bind: address already in use](https://stackoverflow.com/questions/38249434/docker-postgres-failed-to-bind-tcp-0-0-0-05432-address-already-in-use)

## System Metrics

### Database Optimization

- [faker.js](https://fakerjs.dev/) to gen large amount of fake data (millions of rows)
- Do not serve media from database, only urls
- How long did it take to get information back from our query?
  - Where did it take the longest in a table? Where can we shave off the MOST amount of time

### Server Optimization

### Helpful Links

##### Code

- [EXPLAIN / ANALYZE](https://www.postgresql.org/docs/current/sql-explain.html)

- [Performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

##### Tools

- [Kubernetes](https://kubernetes.io/)

- [Selenium](https://www.selenium.dev/documentation/webdriver/)

- [K6 server load testing](https://k6.io/)

### Questions to ask

3 paths of optimization Client, server, and database

Can it scale?

Withstand DDOS attacks?

Millions of requests?

Where are we bottlenecked?

Automate benchmarks with `npm run benchmark` maybe?

How long does it take to stop/start?

Will my server maximize its resources?
