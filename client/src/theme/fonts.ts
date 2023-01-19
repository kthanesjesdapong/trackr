import { fontFace } from 'polished';

export const fonts = {
  ...fontFace({
    fontFamily: 'Plus Jakarta Sans',
    fontFilePath: '/assets/fonts/PlusJakartaSans-ExtraBold.ttf',
    fontWeight: 'extrabold',
    fontDisplay: 'fallback'
  }),
  ...fontFace({
    fontFamily: 'Plus Jakarta Sans',
    fontFilePath: '/assets/fonts/PlusJakartaSans-Regular.ttf',
    fontWeight: 'regular',
    fontDisplay: 'fallback'
  }),
  ...fontFace({
    fontFamily: 'Poppins',
    fontFilePath: '/assets/fonts/Poppins-Regular.ttf',
    fontWeight: 'regular',
    fontDisplay: 'fallback'
  }),
  ...fontFace({
    fontFamily: 'Poppins',
    fontFilePath: '/assets/fonts/Poppins-SemiBold.ttf',
    fontWeight: 'semibold',
    fontDisplay: 'fallback'
  }),
};