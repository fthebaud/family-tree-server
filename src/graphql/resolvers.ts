export default {
    Query: {
        persons: async (parents: any, args: any, {dataSources}: any) => {
            const allPersons = await dataSources.personAPI.findAllPersons()
            return allPersons
        },
    },
}
