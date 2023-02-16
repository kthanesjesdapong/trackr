import { theme } from '@theme/theme';

const [mobile, tablet, laptop, desktop] = theme.breakpoints;

const breakpoints = {
  mobile,
  tablet,
  laptop,
  desktop
};

type Breakpoints = keyof typeof breakpoints;

type ViewportObject = { [key in Breakpoints]?: any };


//When you call vh, you pass it an obj
//{mobile: css props}
// You can use this to define custom viewports  min || max || between with our helperfunctions from media.ts
function viewportHelper(obj: ViewportObject) {
  return [obj.mobile || null, obj.tablet || null, obj.laptop || null, obj.desktop || null];
}

export const vp = viewportHelper;