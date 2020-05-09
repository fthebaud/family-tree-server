import {connnectToDatabase} from './database/database.utils'
import {createPerson, getPersons} from './database/Person/Person.service'
import data from '../data/stark-family.json'
import mongoose from 'mongoose'

async function main () {
    console.log('--- CONNECT TO DATABASE ---')
    await connnectToDatabase()

    console.log('--- TEST FETCHING DATA ---')
    await mongoose.connection.dropCollection('Person')
    await createPerson(data)
    const persons = await getPersons()
    console.log(persons)
}

main()
