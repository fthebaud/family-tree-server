import mongoose from 'mongoose'

import data from '../data/stark-family.json'

import {connnectToDatabase} from './database/database.utils'
import {createPerson, getPersons, getPersonById} from './database/Person/Person.service'
import {Person} from './database/Person/Person.interface'

async function main(): Promise<boolean> {
    console.log('--- CONNECT TO DATABASE ---')
    await connnectToDatabase()

    console.log('--- TEST FETCHING DATA ---')
    await mongoose.connection.dropCollection('person')
    await createPerson(data as Person[])
    const persons = await getPersons()
    console.log(persons)
    console.log('first person:')
    const first = await getPersonById(persons[0]._id)
    console.log(first)
    return true
}

main()
