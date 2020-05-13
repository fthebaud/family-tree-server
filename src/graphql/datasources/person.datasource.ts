import {DataSource} from 'apollo-datasource'

import {getPersons} from '../../database/Person/Person.service'

class PersonAPI extends DataSource {
    async findAllPersons() {
        const persons = await getPersons()
        return persons
    }
}

export default PersonAPI
