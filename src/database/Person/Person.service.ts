import {Person} from './Person.schema'
import {IPerson} from './Person.interface'

export function createPerson (p: IPerson) {
    return Person.create(p)
}

export function getPersons () {
    return Person.find((err) => {
        if (err) throw err
    })
}
