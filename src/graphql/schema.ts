import {gql} from 'apollo-server'

export default gql`
    type Query {
        """
            Insert documentation here
        """
        persons(
            """
            Page number
            """
            page: Int
            """
            Page size
            """
            pageSize: Int
        ): [Person]!
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
