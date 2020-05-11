import mongoose from 'mongoose'

import {Person} from './Person.interface'

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

export interface PersonDocument extends Person, mongoose.Document {}

export const PersonModel = mongoose.model<PersonDocument>('Person', schema)
