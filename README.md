# Word Play API

GraphQL API for finding valid words from combinations of letters.

### Query support
#### words(letters:)
* list valid words which use all input letters

### Dictionary support
* CSW15

### Roadmap
* clean up database models
* database from plain text list of words
* add support for SOWPODS dictionary
* decide upon query name scheme
* publish publically
* support additional problem solution queries
  * ninegram
* support problem generation queries

---

This project was bootstraped with [Node.js API Starter Kit][nodejskit] ([support][gitter]).

<p align="center"><a href="https://graphql-demo.kriasoft.com"><img src="http://koistya.github.io/files/nodejs-api-starter-demo.png" width="600" alt="GraphQL Demo" /><br><sup>https://graphql-demo.kriasoft.com</sup></a></p>


## Tech Stack

* [Docker][docker], [Node.js][node], [Yarn][yarn], [JavaScript][js], [Babel][babel], [Flow][flow], [Prettier][prettier] — core platform and dev tools
* [Express][express], [Passport.js][passport], [session][session], [flash][flash], [cors][cors] etc. — common HTTP-server features
* [GraphQL.js][gqljs], [GraphQL.js Relay][gqlrelay], [DataLoader][loader], [validator][validator] — [GraphQL][gql] schema and API endpoint
* [PostgreSQL][pg], [Redis][redis], [Knex][knex], [pg][nodepg] — SQL, document, key/value data store; data acess and migrations
* [Nodemailer][mailer], [Handlebars][hbs], [Juice][juice] — transactional email and email templates /w layout support
* [I18next][i18next], [I18next Middleware][i18nextmid], [I18next Backend][i18nextback] — localization and translations
* [Jest][jest] - unit and snapshot testing

## Directory Layout

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /locales/                   # Localization resources (i18n)
├── /migrations/                # Database schema migrations
├── /seeds/                     # Scripts with reference/sample data
├── /src/                       # Node.js application source files
│   ├── /emails/                # Handlebar templates for sending transactional email
│   ├── /routes/                # Express routes, e.g. /login/facebook
│   ├── /schema/                # GraphQL schema type definitions
│   ├── /utils/                 # Utility functions (mapTo, mapToMany etc.)
│   ├── /app.js                 # Express.js application
│   ├── /Context.js             # Data loaders and other context-specific stuff
│   ├── /db.js                  # Database access and connection pooling (via Knex)
│   ├── /email.js               # Client utility for sending transactional email
│   ├── /errors.js              # Custom errors and error reporting
│   ├── /passport.js            # Passport.js authentication strategies
│   ├── /redis.js               # Redis client
│   ├── /server.js              # Node.js server (entry point)
│   └── /types.js               # Flow type definitions
├── /tools/                     # Build automation scripts and utilities
├── docker-compose.yml          # Defines Docker services, networks and volumes
├── docker-compose.override.yml # Overrides per developer environment (not under source control)
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # List of project dependencies
└── postgres-initdb.sh          # Configuration script for the PostgreSQL Docker container
```


## Prerequisites

* [Docker][docker] Community Edition v17 or higher
* [VS Code][code] editor (preferred) + [Project Snippets][vcsnippets],
  [EditorConfig][vceditconfig], [ESLint][vceslint], [Flow][vcflow], and [Prettier][vcprettier]
  plug-ins.
* [Brew][brew] installed


## Getting Started

Just clone the repo and run `docker-compose up`:

```bash
brew install nvm jq direnv
git clone https://github.com/arlophoenix/word-play-api.git
cd word-play-api                  # Change current directory to the newly created one
docker-compose up               # Launch Docker containers with the Node.js API app running inside
```

The API server must become available at [http://localhost:8080/graphql](http://localhost:8080/graphql)
([live demo][demo]).

Once the Docker container named `api` is started, the Docker engine executes `node tools/run.js`
command that installs Node.js dependencies, migrates database schema to the latest version,
compiles Node.js app from source files (see [`src`](./src)) and launches it with "live reload"
on port `8080`.

If you need to manually rollback and re-apply the latest database migration file, run the following:

```bash
yarn docker-db-rollback         # Rollbacks the latest migration
yarn docker-db-migrate          # Migrates database to the latest version (see /migrates folder)
yarn docker-db-seed             # Seeds database with test data (see /seeds folder)
```

In order to open a shell from inside the running "api" container, run:

```bash
docker-compose exec api /bin/sh
```

Similarly, if you need to open a PostgreSQL shell ([psql][psql]), execute this command:

```bash
docker-compose exec db psql <db> -U postgres
```

For the full list of automation scripts available in this project, please reffer to "scripts"
section in the [`package.json`](./package.json) file and the [`tools`](./tools) folder.


## Testing

```bash
yarn lint                       # Find problematic patterns in code
yarn check                      # Check source code for type errors
yarn docker-test                # Run unit tests once inside a Docker container
yarn docker-test-watch          # Run unit tests in watch mode inside a Docker container
```

For more information visit http://facebook.github.io/jest/


## Debugging

In order to run the app with [V8 inspector][v8debug] enabled, simply replace `node tools/run.js`
with `node --inspect=0.0.0.0:9229 tools/run.js` in either [`docker-compose.yml`](docker-compose.yml)
file or, even better, in `docker-compose.override.yml`. Then restart the app (`docker-compose up`) and
[attach your debugger][vsdebug] to `127.0.0.1:9230` (see [`.vscode/launch.json`](./.vscode/launch.json))


## Keeping Up-to-Date

If you keep the original Git history after cloning this repo, you can always fetch and merge
the recent updates back into your project by running:

```bash
git remote add nodejs-api-starter https://github.com/kriasoft/nodejs-api-starter.git
git checkout master
git fetch nodejs-api-starter
git merge nodejs-api-starter/master
docker-compose build --no-cache
docker-compose run --rm --no-deps api yarn
docker-compose up
```

*NOTE: Try to merge as soon as the new changes land on the master branch in Node.js API Starter
repository, otherwise your project may differ too much from the base/upstream repo.*


## Deployment

Customize the deployment script found in `tools/publish.js` if needed. Then whenever you need to
deploy your app to a remote server simply run:

```bash
node tools/publish <host>       # where <host> is the name of your web server (see ~/.ssh/config)
```

[babel]: http://babeljs.io/
[brew]: https://brew.sh/
[code]: https://code.visualstudio.com/
[compose]: https://docs.docker.com/compose/
[cors]: https://github.com/expressjs/cors
[demo]: https://graphql-demo.kriasoft.com/
[do]: https://m.do.co/c/eef302dbae9f
[docker]: https://www.docker.com/community-edition
[express]: http://expressjs.com/
[flash]: https://github.com/expressjs/flash
[flow]: https://flow.org/
[gitter]: https://gitter.im/kriasoft/nodejs-api-starter
[gql]: http://graphql.org/
[gqljs]: https://github.com/graphql/graphql-js
[gqlrelay]: https://github.com/graphql/graphql-relay-js
[hbs]: http://handlebarsjs.com/
[i18next]: https://www.i18next.com/
[i18nextback]: https://github.com/i18next/i18next-node-fs-backend
[i18nextmid]: https://github.com/i18next/i18next-express-middleware
[jest]: http://facebook.github.io/jest/
[js]: https://developer.mozilla.org/docs/Web/JavaScript
[juice]: https://github.com/Automattic/juice
[knex]: http://knexjs.org/
[loader]: https://github.com/facebook/dataloader
[mailer]: https://nodemailer.com/
[node]: https://nodejs.org
[nodejskit]: https://github.com/kriasoft/nodejs-api-starter
[nodepg]: https://github.com/brianc/node-postgres
[passport]: http://passportjs.org/
[pg]: https://www.postgresql.org/
[prettier]: https://prettier.io/
[psql]: https://www.postgresql.org/docs/current/static/app-psql.html
[redis]: https://redis.io/
[rsb]: https://github.com/kriasoft/react-static-boilerplate
[rsk]: https://github.com/kriasoft/react-starter-kit
[session]: https://github.com/expressjs/session
[v8debug]: https://chromedevtools.github.io/debugger-protocol-viewer/v8/
[validator]: https://github.com/chriso/validator.js
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcflow]: https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vsdebug]: https://code.visualstudio.com/Docs/editor/debugging
[yarn]: https://yarnpkg.com
