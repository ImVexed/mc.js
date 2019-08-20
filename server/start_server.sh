sleep 10s

if [ ! -f server/src/generated/prisma.graphql ]; then
   yarn run prisma:deploy
   yarn run prisma:get-schema

fi

yarn run server
