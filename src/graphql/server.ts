import {ApolloServer} from 'apollo-server'

import typeDefs from './schema'
import resolvers from './resolvers'
import PersonAPI from './datasources/person.datasource'

export default new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        personAPI: new PersonAPI(),
    }),
})
