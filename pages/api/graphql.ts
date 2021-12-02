import { ApolloServer } from 'apollo-server-micro'
import { schema } from 'src/schema'
import { PageConfig } from 'next'

const apolloServer = new ApolloServer({
    schema,
})

const startServer = apolloServer.start()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://studio.apollographql.com'
    )
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
}
