import mongoose from 'mongoose'

import {PersonDocument} from './Person.interface'

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'person',
    })

export const PersonModel = mongoose.model<PersonDocument>('Person', schema)
