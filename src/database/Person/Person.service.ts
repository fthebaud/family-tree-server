import {PersonModel} from './Person.schema'
import {Person} from './Person.interface'

export async function createPerson(p: Person | Person[]): Promise<Person> {
    const pers = await PersonModel.create(p)
    return pers
}

export async function getPersons(): Promise<Person[]> {
    const pers = await PersonModel.find((err) => {
        if (err) throw err
    })
    return pers
}
