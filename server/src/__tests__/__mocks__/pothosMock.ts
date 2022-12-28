import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended';
import { builder } from '../../graphql/schema/builder';

jest.mock('../../graphql/schema/builder', () => ({
  __esModule: true,
  default: mockDeep<typeof builder>()
}));

const pothosMock = (builder as unknown) as MockProxy<typeof builder>;

// beforeEach(() => {
//   mockReset(pothosMock);
// });

export default pothosMock;
