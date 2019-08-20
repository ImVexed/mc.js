import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'server/src/generated/prisma.graphql',
  endpoint: 'http://prisma:4466',
  secret: 'thisismysupersecrettext'
})

export default prisma
