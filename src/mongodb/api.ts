import { getDB } from './mongoClient'

export function findAll () {
    const collection = getDB().collection('persons')
    collection.find({}).toArray((err: any, results: any) => {
        if (err) throw err
        console.log('find all', results)
    })
}
