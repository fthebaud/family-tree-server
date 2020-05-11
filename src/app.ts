import mongoose from 'mongoose'

import data from '../data/stark-family.json'

import {connnectToDatabase} from './database/database.utils'
import {createPerson, getPersons, getPersonById, deleteById, updateOne} from './database/Person/Person.service'
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
    const firtId: string = persons[0]._id
    const first = await getPersonById(firtId)
    console.log(first)
    console.log('delete first')
    const delCount = await deleteById(firtId)
    console.log('delete count', delCount)
    console.log('update last')
    const updated = await updateOne({
        _id: persons[6],
        firstName: 'toto',
        lastName: 'updated',
    })
    console.log(updated)

    return true
}

main()
