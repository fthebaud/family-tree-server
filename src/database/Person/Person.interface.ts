import mongoose from 'mongoose'

interface Person {
    firstName: string
    lastName: string
}

export interface PersonDocument extends Person, mongoose.Document {}
