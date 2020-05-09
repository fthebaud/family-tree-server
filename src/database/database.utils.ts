import {HOST, DB} from './database.config'
import mongoose from 'mongoose'

export function connnectToDatabase () {
    // Connect to mongodb server
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
