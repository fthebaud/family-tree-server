import mongoose from 'mongoose'

import {IPerson} from './Person.interface'

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
        collection: 'Person',
    })

export const Person = mongoose.model<IPerson>('Person', schema)
