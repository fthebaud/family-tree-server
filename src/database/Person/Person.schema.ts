import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
    },
    {
        collection: 'Person',
    })

export const Person = mongoose.model('Person', schema)
