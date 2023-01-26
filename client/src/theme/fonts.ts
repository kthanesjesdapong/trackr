import { fontFace } from 'polished';

export const fonts = {
  ...fontFace({
    fontFamily: 'Plus Jakarta Sans',
    fontFilePath: '/assets/fonts/PlusJakartaSans-ExtraBold',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
  ...fontFace({
    fontFamily: 'Plus Jakarta Sans',
    fontFilePath: '/assets/fonts/PlusJakartaSans-Regular',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
  ...fontFace({
    fontFamily: 'Poppins',
    fontFilePath: '/assets/fonts/Poppins-Regular',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
  ...fontFace({
    fontFamily: 'Poppins',
    fontFilePath: '/assets/fonts/Poppins-SemiBold',
    fontWeight: 'semibold',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
};