Issues:
@pothos/plugin-prisma/src/global-types.ts

PrismaObjectFieldBuilder
- Simultaneously extending types
Named property createExpose not identical;
               exposeProperty not identical;


When setting up the project, or installing new packages into the server dir,
pothos/prisma-plugin may not properly generate types right away.
To fix you may need to yarn generate, or remove node_modules and do a clean yarn install.

