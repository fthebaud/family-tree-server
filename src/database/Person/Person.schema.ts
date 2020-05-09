import mongoose from 'mongoose'
import {ObjectId} from 'mongodb'

const personSchema = new mongoose.Schema({
    _id: ObjectId,
    firstName: String,
    lastName: String,
})

export const Person = mongoose.model('Persons', personSchema)
