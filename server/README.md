# trackr-server

## Installation
1. Run yarn install within trackr/server
2. Run yarn generate or yarn migration


## Issues: 
- When you run yarn generate or yarn migration, your prisma types may not properly generate. To fix this navigate to node_modules/@pothos/plugin-prisma/generated.ts/PrismaTypes. and then run yarn generate or migration.



## Missing Files: 
- aws.config.ts from server/aws.config.ts
    - This file contains configurations for aws cognito
- .env 
- seed.ts