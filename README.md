## How to run

This is based on simple nest app of `master` branch & here we connect to mssql db. We also
have migrations for `User` entity with `email` & `password` flow setup.

## Make sure MSSQL is up & running

First use correct crentials for DB connection in `.env` file and then run migrations

```
npm run db:modules:run
```
