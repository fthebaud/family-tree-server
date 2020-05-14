import mongoose from 'mongoose'

import data from '../data/stark-family.json'

import {connnectToDatabase} from './database/database.utils'
import {PersonAPI} from './graphql/datasources/person.api'
import server from './graphql/server'

async function main(): Promise<void> {
    console.log('--- CONNECT MONGOOSE TO DATABASE ---')
    await connnectToDatabase()

    console.log('--- INIT DATABASE ---')
    try {
        await mongoose.connection.dropCollection('person')
    } catch (err) {
        if (err.message !== 'ns not found') {
            throw err
        }
    }
    const personApi = new PersonAPI()
    await personApi.createBatch(data)

    console.log('--- START APOLLO SERVER ---')
    server.listen()
        .then(({url}: {url: string}) => {
            console.log(`Server ready at ${url}`)
        })
}

main()
