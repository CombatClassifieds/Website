# System Metrics

### Database Optimization

- [faker.js](https://fakerjs.dev/) to gen large amount of fake data (millions of rows)
- Do not serve media from database, only urls
- How long did it take to get information back from our query?
  - Where did it take the longest in a table? Where can we shave off the MOST amount of time

### Server Optimization

- get rid of unneeded code
- Play around with request amounts - More is less? Less is more?
- Cache database queries
- Load balancers

  #### [Apache benchmark](https://httpd.apache.org/docs/2.4/programs/ab.html) responses per second

  - After installation run `ab http://127.0.0.1:3000`
  - take note of time taken for requests
  - now run `ab -n 1000 -c 100 http://127.0.0.1:3000` to run 100 concurrent requests for a total of 1000 requests
  - take note of requests per second
  - What is your pcs CPUs usage looking like while this is happening?
    - Your code should run as hard as possible to complete its task
    - maybe we can horizontillly scale instead if we cant get more CPU usage
    - [docker containers](https://www.squash.io/how-to-improve-docker-container-performance/) and [kubernetes](https://kubernetes.io/)
  - This will run what users see - `npm run build` and will determine what is dynamic and what is static and optmize it automatically.

### Client Optimization

                    xxxx USEFUL INFO HERE xxxx

### Helpful Links

##### Code

- [EXPLAIN / ANALYZE](https://www.postgresql.org/docs/current/sql-explain.html)
- [Performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

##### Tools

- [Kubernetes](https://kubernetes.io/)
- [Selenium](https://www.selenium.dev/documentation/webdriver/)
- [K6](https://k6.io/)
- [Loader.io](https://loader.io/)

### Questions to ask

3 paths of optimization Client, server, and database

Can it scale?

Withstand DDOS attacks?

Millions of requests?

Where are we bottlenecked?

Automate benchmarks with `npm run benchmark` maybe?

How long does it take to stop/start?

Will my server maximize its resources?

# Developer Journals

## [Anthony](https://github.com/anthonymeadows) - Optimization of XXX

## [Dillon]() - Optimization of XXX

## [Athan]() - Optimization of XXX

## [Matthew]() - Optimization of XXX
