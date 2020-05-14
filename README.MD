
This is a POC for a graphQL server using the following stack
- typescript
- apollo
- mongodb via mongoose

## Pre-requisite
Before Running the project, a mongo server must be running with on database (see database.config.ts for host and database name configuration)


## Note: How to run MongoDB server on windows
```
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\DB\Mongo\data\db"
```
By default the server is running at this address: 127.0.0.1:27017

Create and manage your database and collections by using either
- mongo shell (mongo.exe) 
- mongoDB Compass GUI (connect to "mongodb://127.0.0.1:27017")


# TODO
- pagination
- filter
- sort
- authentication (passeport.js)
- subscription
- API versionning
- cache