import { builder } from '../../../builder';
import { formSignUpCommand } from '../../../../../service/user.service';
import { buildUserAttributeArray } from '../../../../../utils/utilityFunction';



//Create userInputType, create Arr
export const userAttribute = builder.inputType('userAttribute', {
  fields: (t) => ({
    Name: t.string({ required: true }),
    Value: t.string({ required: true })
  }),
});




export const createOneUser = builder.mutationField('createUser', (t) => t.prismaField({
  type: 'User',
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
    const createdCognitoUser = await context.cognito.send(registeredUser);


    if (createdCognitoUser.$metadata.httpStatusCode !== 200)



      console.log(createdCognitoUser);
    const createdUser = await context.prisma.user.create({
      data: {
        id: args.id
      },
      ...query
    });
    return createdUser;

  }
}));