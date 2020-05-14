import {DataSource} from 'apollo-datasource'

import {PersonModel} from '../../database/Person/Person.schema'
import {PersonDocument} from '../../database/Person/Person.interface'

export class PersonAPI extends DataSource {
    /**
    *   Note:
    *    We are not doing directly "return PersonModel.find()" or "return PersonModel.findById()" Because they return a query object, wich is a "thenable".
    *    We need to trigger the execution of the query by using await in order to get the result (a document or a list of documents)
    */
    async getPersons(): Promise<PersonDocument[]> {
        const pers = await PersonModel.find()
        return pers
    }

    async getPerson(id: string): Promise<PersonDocument | null> {
        const pers = await PersonModel.findById(id)
        return pers
    }

    async createPerson(firstName: string, lastName: string): Promise<PersonDocument> {
        const pers = await PersonModel.create({firstName, lastName})
        return pers
    }

    async createBatch(persons: {firstName: string; lastName: string}[]): Promise<PersonDocument[]> {
        const pers = await PersonModel.create(persons)
        return pers
    }

    async updatePerson(id: string, firstName: string, lastName: string): Promise<PersonDocument | null> {
        const data: {firstName?: string; lastName?: string} = {}
        if (firstName) {
            data.firstName = firstName
        }
        if (lastName) {
            data.lastName = lastName
        }
        const updatedPerson = await PersonModel.findOneAndUpdate({_id: id}, data, {new: true})
        return updatedPerson
    }

    async deletePerson(id: string): Promise<boolean> {
        const {deletedCount} = await PersonModel.deleteOne({_id: id})
        return deletedCount === 1
    }
}
