import('dotenv/config');
import config from 'config';
import { GraphQLClient } from 'graphql-request';

export const leetcodeUrl = config.get<string>('gqlEndpoint');

//Client that can be used anywhere
//We use this to fetch from leetcode's GQL
export const client = new GraphQLClient(leetcodeUrl, { headers: {} })

