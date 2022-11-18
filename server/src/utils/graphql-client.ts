import('dotenv/config');
import config from 'config';
import { GraphQLClient } from 'graphql-request';

export const leetcodeUrl = config.get<string>('gqlEndpoint');

//Client that can be used anywhere
export const client = new GraphQLClient(leetcodeUrl, { headers: {} })

