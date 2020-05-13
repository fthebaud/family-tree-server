import mongoose from 'mongoose'

import data from '../data/stark-family.json'

import {connnectToDatabase} from './database/database.utils'
import {Person} from './database/Person/Person.interface'
import {createPerson} from './database/Person/Person.service'
import server from './graphql/server'

async function main(): Promise<boolean> {
    console.log('--- CONNECT MONGOOSE TO DATABASE ---')
    await connnectToDatabase()

    console.log('--- INIT DATABASE ---')
    await mongoose.connection.dropCollection('person')
    await createPerson(data as Person[])

    console.log('--- START APOLLO SERVER ---')
    server.listen()
        .then(({url}: {url: string}) => {
            console.log(`Server ready at ${url}`)
        })

    return true
}

main()
