import { builder } from "../../../builder";
import { initiateAuthCommand, getUserIdentityPools } from '../../../../../service/user.service';



//For now we're just mocking the logged in user's data.
export const login = builder.queryField('login', (t) => t.prismaField({
  type: 'User',
  description: 'Logs a user in',
  args: {
    id: t.arg.string({ required: true }),
    password: t.arg.string({ required: true })
  },
  resolve: async (query, root, args, context, info) => {
    const userSignInInput = {
      email: args.id,
      password: args.password
    };
    //Forms Init Auth Command
    const userLog = initiateAuthCommand(userSignInInput);
    //Send Auth Command
    const signedInUser = await context.cognito.send(userLog);
    //Grab Auth Results and take the IdToken this will be used to Authenticate.
    const { AuthenticationResult } = signedInUser;
    const idToken = signedInUser.AuthenticationResult?.IdToken;
    console.log(idToken);
    let identityPoolClient;
    // identityPoolClient is our client with credentials attached to the object.
    if (idToken !== undefined) identityPoolClient = await getUserIdentityPools(idToken);

    console.log(identityPoolClient?.config.credentials());
    // Find the Signed In User
    const loggedInUser = await context.prisma.user.findUniqueOrThrow({
      ...query,
      where: {
        id: args.id
      }
    });
    return loggedInUser;
  },
}));
