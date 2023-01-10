import { builder } from '../../../builder';
import { formSignUpCommand } from '../../../../../service/user.service';
import { buildUserAttributeArray } from '../../../../../utils/utilityFunction';
import { Prisma, PrismaClient } from '@prisma/client';

//Uses Cognito Client and Prisma Client to create user
//Yarn Generate Not Properly generating types for our resolver but queries are still going through
export const createOneUser = builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
  description: "creates User",
  args: {
    //Cognito User's Email as id
    id: t.arg.string({ required: true }),
    password: t.arg.string({ required: true }),
    passwordRepeat: t.arg.string({ required: true }),
    Name: t.arg.stringList({ required: true }),
    Value: t.arg.stringList({ required: true })

  },
  resolve: async (query, root, args, context, info) => {

    const userAttArr = buildUserAttributeArray(args.Name, args.Value);


    //Sends command to Cognito Client
    const userSignUpInput = {
      // We're using Cognito User's Email as the id
      email: args.id,
      password: args.password,
      passwordRepeat: args.passwordRepeat,
      userAttribute: userAttArr
    };
    //Forms Command
    const registeredUser = formSignUpCommand(userSignUpInput);
    //Sends Command
    const createdCognitoUser = await context.cognito.send(registeredUser);
    const createdUser = await context.prisma.user.create({
      data: {
        id: args.id
      },
      ...query
    });
    return createdUser;
  }
}));