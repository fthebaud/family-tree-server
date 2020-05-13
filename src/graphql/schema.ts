import {gql} from 'apollo-server'

export default gql`

    type Query {
        persons: [Person]!
    }

    type Person {
        id: ID!
        firstName: String
        lastName: String
    }
`
