import {PersonModel, PersonDocument} from './Person.schema'
import {Person} from './Person.interface'
import {PersonUpdate} from './PersonUpdate.interface'

export async function createPerson(p: Person | Person[]): Promise<PersonDocument> {
    const pers: PersonDocument = await PersonModel.create(p)
    return pers
}

/**
*   Note
*    We are not doing directly "return PersonModel.find()" or "return PersonModel.findById()"
*    Because find and findById return a query object, wich is a "thenable"
*    We need to trigger the execution of the request byw using await
*    This will give us the result of the query (a document or a list of documents)
*/

export async function getPersons(): Promise<PersonDocument[]> {
    const pers: PersonDocument[] = await PersonModel.find()
    return pers
}

export async function getPersonById(id: string): Promise<PersonDocument | null> {
    const pers = await PersonModel.findById(id)
    return pers
}

export async function deleteById(_id: string): Promise<number> {
    const {deletedCount} = await PersonModel.deleteOne({_id})
    return deletedCount || 0
}

export async function updateOne(persUpdate: PersonUpdate): Promise<PersonDocument | null> {
    const updatedPerson = await PersonModel.findOneAndUpdate({_id: persUpdate._id}, persUpdate, {new: true})
    return updatedPerson
}
