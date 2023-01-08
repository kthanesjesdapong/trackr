import { builder } from '../../../builder';
import { formSignUpCommand } from '../../../../../service/user.service';
import { buildUserAttributeArray } from '../../../../../utils/utilityFunction';

//Uses Cognito Client and Prisma Client to create user
export const createOneUser = builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
  description: "creates User",
  args: {
    id: t.arg.string({ required: true }),
    email: t.arg.string({ required: true }),
    password: t.arg.string({ required: true }),
    passwordRepeat: t.arg.string({ required: true }),
    Name: t.arg.stringList({ required: true }),
    Value: t.arg.stringList({ required: true })

  },
  resolve: async (query, root, args, context, info) => {

    const userAttArr = buildUserAttributeArray(args.Name, args.Value);

    const userSignUpInput = {
      email: args.email,
      password: args.password,
      passwordRepeat: args.passwordRepeat,
      userAttribute: userAttArr
    };

    const registeredUser = formSignUpCommand(userSignUpInput);
    //Sends command to Cognito Client
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