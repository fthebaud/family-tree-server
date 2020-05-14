import {gql} from 'apollo-server'

export default gql`
    type Query {
        """
            Insert documentation here
        """
        persons: [Person]!
        person(id: ID!): Person
    }

    type Mutation {
        createPerson(firstName: String, lastName: String): Person
        updatePerson(id: ID!, firstName: String, lastName: String): Person
        deletePerson(id: ID!): Boolean
    }

    type Person {
        id: ID!
        firstName: String
        lastName: String
    }
`
