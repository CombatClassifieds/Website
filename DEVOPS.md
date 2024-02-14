# System Metrics

### Database Optimization

- [faker.js](https://fakerjs.dev/) to gen large amount of fake data (millions of rows)
- Do not serve media from database, only urls
- How long did it take to get information back from our query?
  - Where did it take the longest in a table? Where can we shave off the MOST amount of time

#### Database seeding

run faker.js with node to generate an insert statement into our seed.sql file. It appends information to th end. The number generated is on line 33 as the length parameter.

MAKE A COPY OF SEED FILE BEFORE MAKING SEED DATA - Dont push seeded data

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
- [faker.js](https://fakerjs.dev/)

##### Tools

- [Apache benchmark](https://httpd.apache.org/docs/2.4/programs/ab.html)
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

# Developer notes

[Deliverables](https://learn-2.galvanize.com/cohorts/3986/blocks/998/content_files/System%20Design%20Capstone/01-introduction-to-system-design-capstone.md)

###### Engineering Journal

    Each team member will submit a writeup of your work and findings throughout SDC. This includes the tests you run, the results you observe, and the optimizations you make. Record both qualitative and quantitative notes, collecting as much quantitative data as possible.

###### Video Report

    Each team member will make a short video detailing the work they did during SDC and the lessons learned along the way, all presented using measured quantitative observations. Read more about video reports here.

###### Final Conversation

    You'll present the work you did during SDC with your team and answer any follow up questions as a group.

## [Anthony](https://github.com/anthonymeadows) - Optimization of Database

In order to get a better idea of our database laoding times, I first needed to load more data into our current list of available items from five, to millions.
For this I used [fakerjs](https://fakerjs.dev/) and the pg library.

## [Dillon]() - Optimization of XXX

## [Athan]() - Optimization of XXX

## [Matthew]() - Optimization of XXX
