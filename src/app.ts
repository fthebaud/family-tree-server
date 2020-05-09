import {connnectToDatabase} from './database/database.utils'
import {getPersons} from './database/Person/Person.service'

async function main () {
    console.log('--- CONNECT TO DATABASE ---')
    await connnectToDatabase()

    console.log('--- TEST FETCHING DATA ---')
    const persons = await getPersons()
    console.log(persons)
}

main()
