import {Person} from './Person.schema'

export function getPersons () {
    return Person.find((err) => {
        if (err) throw err
    })
}
