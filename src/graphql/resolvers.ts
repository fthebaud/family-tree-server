
import {PersonDocument} from '../database/Person/Person.interface'

import {PersonAPI} from './datasources/person.api'

interface Context {
    dataSources: {
        personAPI: PersonAPI
    }
}

export default {
    Query: {
        persons: (parent: object, args: object, {dataSources}: Context): Promise<PersonDocument[]> => dataSources.personAPI.getPersons(),

        person: (parent: object, args: {id: string}, {dataSources}: Context): Promise<PersonDocument | null> => dataSources.personAPI.getPerson(args.id),
    },

    Mutation: {
        createPerson: async (parent: object, args: {firstName: string; lastName: string}, {dataSources}: Context): Promise<PersonDocument> =>
            dataSources.personAPI.createPerson(args.firstName, args.lastName),

        updatePerson: async (parent: object, args: {id: string; firstName: string; lastName: string}, {dataSources}: Context): Promise<PersonDocument | null> =>
            dataSources.personAPI.updatePerson(args.id, args.firstName, args.lastName),

        deletePerson: async (parent: object, args: {id: string}, {dataSources}: Context): Promise<boolean> =>
            dataSources.personAPI.deletePerson(args.id),
    },
}
