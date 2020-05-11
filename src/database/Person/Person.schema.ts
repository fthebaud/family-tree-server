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

interface IPersonDocument extends IPerson, mongoose.Document {}

export const Person = mongoose.model<IPersonDocument>('Person', schema)
