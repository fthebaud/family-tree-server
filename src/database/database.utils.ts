import mongoose from 'mongoose'

import {HOST, DB} from './database.config'

export function connnectToDatabase() {
    // Connect to mongodb server using mongoose
    mongoose.connection.on('connected', () => {
        console.log('mongoose connected')
    })
    mongoose.connection.on('error', () => {
        console.log('mongoose connection error')
    })
    mongoose.connection.on('disconnected', () => {
        console.log('mongoose disconnected')
    })
    return mongoose.connect(`mongodb://${HOST}/${DB}`, {useNewUrlParser: true, useUnifiedTopology: true})
}
