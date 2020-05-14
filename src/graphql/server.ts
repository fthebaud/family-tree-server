import {ApolloServer} from 'apollo-server'

import typeDefs from './schema'
import resolvers from './resolvers'
import {PersonAPI} from './datasources/person.api'

export default new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: (): any => ({
        personAPI: new PersonAPI(),
    }),
})
