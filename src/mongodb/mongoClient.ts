import { MongoClient } from 'mongodb'

import { MONGO_URL } from './mongo.constant'

const client: { close: () => void; } | null = null

let db: any = null

// Connect to MongoDB. The callback receive the connected client as a parameter
export function connectClient () {
    return MongoClient.connect(MONGO_URL)
}

// Close the client and its underlying connections
export function closeClient () {
    if (client) {
        client.close()
    }
}

export function setDB (database: any) {
    db = database
}

export function getDB () {
    return db
}
